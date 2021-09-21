// wordwrap-cjk <https://github.com/msikma/wordwrap-cjk>
// © MIT license

const stringWidth = require('string-width')
const defaultOpts = require('./defaults')
const { validateOpts } = require('./validate')
const { wrapInArray, stringLength } = require('./util')
const { splitOnMaxWidth, splitOnWordsOrCJK } = require('./split')
const { makeIndents, pushPadding } = require('./indent')

/**
 * Splits a source string and then groups the segments into individual lines based on the maximum width.
 * 
 * This function does most of the actual work; it splits a source string into individual words or CJK characters,
 * then adds them to a new line one by one until the maximum width is reached. Then it moves on to the next line,
 * until the whole string is processed.
 * 
 * It returns an array of arrays (each inner array being one single split up line) that can be joined to make
 * the final output.
 * 
 * This function can probably be simplified, but the addition of CJK text support adds significant complexity.
 */
const groupIntoLines = (str, lineIndentation, opts) => {
  const { breakLongWords, textDirection, newlineBeforeLongWords, useVisualWidth, whitespaceMaintainLinebreaks, whitespaceNormalize, whitespaceChar, padToMaxWidth, whitespaceMaintainWideSpace } = opts

  // Indent values and maximum width; one for the first line, and one for subsequent lines.
  const [indentFirstLine, indentLines] = lineIndentation

  // Function for getting the string width. Either uses visual width or string length.
  const getStringWidth = useVisualWidth ? stringWidth : stringLength
  // Width of the whitespace character, if it is defined. Not used if it's null.
  const whitespaceWidth = whitespaceNormalize ? getStringWidth(whitespaceChar) : null

  // The following options change depending on whether this is the first line or subsequent lines:
  let indentValues, maxWidth, padWithWhitespace

  // Changes the currently used set of indent values. Called with 'indentFirstLine' or 'indentLines'.
  const changeIndentSet = set => {
    [indentValues, , , maxWidth] = set
    // Whether each line should be padded with the whitespace character; true if there is end indent.
    padWithWhitespace = indentValues[1] > 0 || padToMaxWidth
  }
  
  changeIndentSet(indentFirstLine)

  const lines = []
  const split = splitOnWordsOrCJK(str)

  const pushLine = line => {
    lines.push(line)
    changeIndentSet(indentLines)
  }

  let line = []
  let lineLength = 0
  for (let n = 0; n < split.length; ++n) {
    // We're utilizing the split items as an array,
    // so we can potentially split up very long words into multiple items.
    let itemValues = wrapInArray(split[n])
    let itemN = 0

    while (true) {
      let item = itemValues[itemN]

      const isWhitespace = item.match(/[^\S\u00A0]/) != null
      const isLinebreak = item.match(/[\r\n]/) != null
      const isWideSpace = item.match(/\u3000/) != null

      // Whether to normalize the string to a single whitespace character.
      const useWhitespaceCharacter = isWhitespace && whitespaceNormalize && (!isWideSpace || !whitespaceMaintainWideSpace) && (!isLinebreak || !whitespaceMaintainLinebreaks)

      // Determine the width of this item. If the item is whitespace, and we're using
      // a custom whitespace character, we'll need to use its width instead.
      let width = useWhitespaceCharacter ? whitespaceWidth : getStringWidth(item)
      if (useWhitespaceCharacter) {
        item = whitespaceChar
      }

      // If our item is a linebreak that needs to be maintained, we need to reset the line length.
      if (isLinebreak && whitespaceMaintainLinebreaks) {
        pushLine(line)
        line = []
        lineLength = 0
        itemValues = []
        break
      }

      // If this single item is too long to fit on even an empty line, we need to either move to a new line
      // and fit only this one item on it, or we need to split it up and add them one at a time.
      if (width > maxWidth) {
        if (breakLongWords) {
          // Split up the item and then add each segment one by one.
          itemValues = [itemValues.slice(0, itemN), splitOnMaxWidth(item, maxWidth, newlineBeforeLongWords ? 0 : lineLength), itemValues.slice(itemN + 1)].flat()

          // One exception: if we're in a situation where there's a maximum width of 1, and yet even after
          // breaking up long words we end up with a single character longer than 1, add it anyway
          // despite the maximum width being exceeded. This is to allow CJK wide characters to exist
          // when there is only a width of 1 available, preventing an infinite loop.
          if (itemValues.length === 1) {
            pushLine(line)
            line = [itemValues]
            lineLength = 1
            itemValues = []
            break
          }
          else {
            continue
          }
        }
        else {
          // Move to the next line, then dump the item in a line of its own regardless of how long it is.
          pushLine(line)
          pushLine([item])
          line = []
          lineLength = 0
          break
        }
      }

      // Move on to the next line if we've reached the maximum width.
      if (lineLength + width > maxWidth) {
        if (padWithWhitespace) {
          line = pushPadding(line, whitespaceChar, maxWidth, lineLength, textDirection)
        }
        pushLine(line)
        line = []
        lineLength = 0
      }

      // Omit this item if it's pure whitespace at the start of a string.
      if (isWhitespace && lineLength === 0) {
        itemN += 1
        if (itemN >= itemValues.length) {
          break
        }
        continue
      }

      line.push(item)
      lineLength += width

      itemN += 1
      if (itemN >= itemValues.length) {
        break
      }
    }
  }

  if (padWithWhitespace) {
    line = pushPadding(line, whitespaceChar, maxWidth, lineLength, textDirection)
  }
  pushLine(line)

  return lines
}

/**
 * Returns a single flattened line. Called by flattenLines().
 * 
 * Either returns a string or undefined, if the user defined a callback
 * and the callback returned null or undefined.
 */
const flattenLine = (line, indents, opts) => {
  const [, indentStart, indentEnd] = indents

  let buffer = line

  if (opts.lineCallback) {
    buffer = opts.lineCallback(buffer)

    // If, after running the callback function, the buffer becomes
    // null or undefined, the line gets skipped entirely.
    if (buffer == null) {
      return
    }
  }
  
  if (opts.whitespaceTrim) {
    buffer = buffer.trim()
  }
  
  return [indentStart, buffer, indentEnd].join('')
}

/**
 * Flattens a lines array to a single string with indent applied.
 * 
 * If the user specified a callback, it will be applied to each individual line here.
 */
const flattenLines = (lines, lineIndentation, opts) => {
  // Indent values and maximum width; one for the first line, and one for subsequent lines.
  const [indentFirstLine, indentLines] = lineIndentation

  let isFirstLine = true
  const flatLines = []
  for (const lineArray of lines) {
    const line = flattenLine(lineArray.join(''), isFirstLine ? indentFirstLine : indentLines, opts)
    if (line != null) {
      flatLines.push(line)
    }
    isFirstLine = false
  }

  return flatLines.join(opts.newlineChar)
}

/**
 * Performs string wrapping operation.
 * 
 * This will throw a StringWrapOptionsError object if incorrect options are passed.
 */
const wordWrap = (str, userOpts) => {
  const opts = validateOpts({ ...defaultOpts, ...userOpts })
  const lineIndentation = makeIndents(opts)
  const lines = groupIntoLines(str, lineIndentation, opts)
  const wrapped = flattenLines(lines, lineIndentation, opts)

  return wrapped
}

module.exports = {
  wordWrap
}

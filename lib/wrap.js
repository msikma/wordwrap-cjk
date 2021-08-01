// stringwrap-cjk <https://github.com/msikma/stringwrap-cjk>
// © MIT license

const stringWidth = require('string-width')
const defaultOpts = require('./defaults')
const { validateOpts } = require('./validate')
const { optsError } = require('./error')
const { wrapInArray, stringLength, expandMaxWidth, getTermInfo } = require('./util')
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
const groupIntoLines = (str, maxWidth, indents, opts) => {
  const { breakLongWords, textDirection, newlineBeforeLongWords, useVisualWidth, whitespaceMaintainLinebreaks, whitespaceNormalize, whitespaceChar, padToMaxWidth, whitespaceMaintainWideSpace } = opts

  // Function for getting the string width. Either uses visual width or string length.
  const getStringWidth = useVisualWidth ? stringWidth : stringLength
  // Width of the whitespace character, if it is defined. Not used if it's null.
  const whitespaceWidth = whitespaceNormalize ? getStringWidth(whitespaceChar) : null
  // Whether each line should be padded with the whitespace character; true if there is end indent.
  const [indentValues] = indents
  const padWithWhitespace = indentValues[1] > 0 || padToMaxWidth

  const lines = []
  const split = splitOnWordsOrCJK(str)

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
        lines.push(line)
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
            lines.push(line)
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
          lines.push(line)
          lines.push([item])
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
        lines.push(line)
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
  lines.push(line)

  return lines
}

/**
 * Flattens a lines array to a single string with indent applied.
 * 
 * If the user specified a callback, it will be applied to each individual line here.
 */
const flattenLines = (lines, maxWidth, indents, { whitespaceTrim, lineCallback, newlineChar }) => {
  const [_, indentStart, indentEnd] = indents
  const items = []
  for (const lineArray of lines) {
    let line = lineArray.join('')
    if (lineCallback) {
      // After running the callback function, if a line becomes null or undefined
      // it gets skipped entirely.
      line = lineCallback(line)
      if (line == null) continue
    }
    if (whitespaceTrim) line = line.trim()
    items.push(`${indentStart}${line}${indentEnd}`)
  }
  return items.join(newlineChar)
}

/**
 * Returns the maximum width as an integer - converts it if it's a string.
 */
const getMaxWidth = ({ maxWidth, throwOnError }, indents) => {
  const [indentValues] = indents
  const [widthValue, widthType] = expandMaxWidth(maxWidth)
  const indentTotal = indentValues[0] + indentValues[1]
  let widthTarget = 0

  // If it's a percentage value, calculate the width using the terminal's size.
  if (widthType === '%') {
    const info = getTermInfo()
    widthTarget = Math.round(info.width * (widthValue / 100)) - indentTotal
  }
  else {
    // Else, just use the value verbatim.
    widthTarget = maxWidth - indentTotal
  }

  // If, including the indentation, our maximum width value is too small,
  // either error out or use a value of 1.
  if (widthTarget < 1) {
    if (throwOnError) {
      throw optsError(`'maxWidth' must not be smaller than 1 after subtracting the indentation amount from it`)
    }
    else {
      widthTarget = 1
    }
  }

  return widthTarget
}

/**
 * Performs string wrapping operation.
 * 
 * This will throw a StringWrapOptionsError object if incorrect options are passed.
 */
const stringWrapCJK = (str, userOpts) => {
  const opts = validateOpts({ ...defaultOpts, ...userOpts })
  const indents = makeIndents(opts)
  const maxWidth = getMaxWidth(opts, indents)

  const lines = groupIntoLines(str, maxWidth, indents, opts)
  const wrapped = flattenLines(lines, maxWidth, indents, opts)

  return wrapped
}

module.exports = {
  stringWrapCJK
}

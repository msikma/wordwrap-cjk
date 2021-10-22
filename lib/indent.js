// wordwrap-cjk <https://github.com/msikma/wordwrap-cjk>
// © MIT license

const stringWidth = require('string-width')
const { optsError } = require('./error')
const { isInteger, expandMaxWidth, getTermInfo } = require('./util')

/**
 * Returns the maximum width as an integer - converts it if it's a string.
 */
const getLineWidth = ({ maxWidth, throwOnError }, indents) => {
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
 * Turns an indent value into an array if it isn't one yet.
 */
const makeIndentArray = (obj, textDirection) => {
  let arr = isInteger(obj) ? [obj, 0] : obj
  if (textDirection === 'rtl') {
    arr = arr.reverse()
  }
  return arr
}

/**
 * Adds an extra line of padding to a line to get it to max width.
 */
const pushPadding = (line, whitespaceChar, maxWidth, lineLength, textDirection) => {
  const padding = whitespaceChar.repeat(maxWidth - lineLength)
  if (textDirection === 'ltr') {
    return [...line, padding]
  }
  else {
    return [padding, ...line]
  }
}

/**
 * Returns an indent for a single side (start or end).
 */
const makeSingleIndent = (amount, indentChar, indentType) => {
  if (amount === 0) {
    return ''
  }
  if (indentType === 'repeat') {
    return indentChar.repeat(amount)
  }
  if (indentType === 'crop') {
    const repeats = Math.ceil(amount / stringWidth(indentChar))
    return indentChar.repeat(repeats).slice(0, amount)
  }
  
  return ''
}

/**
 * Returns a set of indent values, and a maximum wrap width, for a given indent amount.
 */
const makeIndentSet = (amount, opts) => {
  const { indentChar, indentType, textDirection } = opts
  const indentValues = makeIndentArray(amount, textDirection)
  const indentStart = makeSingleIndent(indentValues[0], indentChar, indentType)
  const indentEnd = makeSingleIndent(indentValues[1], indentChar, indentType)
  const indents = [indentValues, indentStart, indentEnd]
  return [...indents, getLineWidth(opts, indents)]
}

/**
 * Returns an indent string that can be directly prefixed to strings.
 */
const makeIndents = opts => {
  const indentFirstLine = makeIndentSet(opts.indentAmountFirstLine ?? opts.indentAmount, opts)
  const indentLines = makeIndentSet(opts.indentAmount, opts)
  return [indentFirstLine, indentLines]
}

module.exports = {
  makeIndents,
  pushPadding
}

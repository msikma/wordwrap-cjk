// stringwrap-cjk <https://github.com/msikma/stringwrap-cjk>
// © MIT license

const stringWidth = require('string-width')
const { stringLength, isInteger } = require('./util')

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
 * Returns an indent string that can be directly prefixed to strings.
 */
const makeIndents = ({ indentAmount, indentChar, indentType, textDirection }) => {
  const indentValues = makeIndentArray(indentAmount, textDirection)
  const indentStart = makeSingleIndent(indentValues[0], indentChar, indentType)
  const indentEnd = makeSingleIndent(indentValues[1], indentChar, indentType)
  return [indentValues, indentStart, indentEnd]
}

module.exports = {
  makeIndents,
  pushPadding
}

// wordwrap-cjk <https://github.com/msikma/wordwrap-cjk>
// © MIT license

const stringWidth = require('string-width')

/** Checks whether something is a string. */
const isString = obj => typeof obj === 'string' || obj instanceof String

/** Checks whether something is an integer. */
const isInteger = obj => Number.isInteger(obj)

/** Checks whether something is a function or null. */
const isFunctionOrNull = obj => obj == null || typeof obj === 'function'

/** Checks whether something is an array. */
const isArrayOfIntegers = obj => Array.isArray(obj) && obj.filter(n => isInteger(n)).length === obj.length

/** Wraps anything in an array if it isn't one already. */
const wrapInArray = obj => Array.isArray(obj) ? obj : [obj]

/** Wrapper for when visual string width is turned off. */
const stringLength = s => s.length

/**
 * Returns information about the current terminal.
 */
const getTermInfo = () => {
  return {
    width: process.stdout.columns,
    height: process.stdout.rows
  }
}

/**
 * Converts a maximum width value into an object indicating whether it's a percentage value or not.
 * 
 * The maximum width value can be either an integer (in which case it's used verbatim), or a string
 * formatted like e.g. '50%' or '80%'. A percentage value indicates that the width should be
 * a percentage of the current terminal size.
 */
const expandMaxWidth = maxWidth => {
  if (isInteger(maxWidth)) {
    return [maxWidth]
  }
  // Check if maxWidth is a valid string value.
  const matches = maxWidth.match(/^([0-9]+)(.)$/)
  if (matches == null) return []
  if (matches[2] !== '%') return []
  const intValue = Number(matches[1])
  return [intValue, '%']
}

module.exports = {
  isString,
  isInteger,
  isArrayOfIntegers,
  isFunctionOrNull,
  expandMaxWidth,
  stringLength,
  stringWidth,
  getTermInfo,
  wrapInArray
}

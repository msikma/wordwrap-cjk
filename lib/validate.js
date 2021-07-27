// stringwrap-cjk <https://github.com/msikma/stringwrap-cjk>
// © MIT license

const defaultOpts = require('./defaults')
const { optsError } = require('./error')
const { isString, isArrayOfIntegers, isInteger, isFunctionOrNull, expandMaxWidth } = require('./util')

/**
 * Validates the passed options.
 * 
 * This function will throw a StringWrapOptionsError if any of the options are incorrect,
 * unless 'throwOnError' is set to false.
 */
const validateOpts = (opts) => {
  // Whether to throw on error. Reverts to default value otherwise.
  const { throwOnError } = opts

  // Error to throw, if any.
  let error = null

  if (!isString(opts.maxWidth) && !isInteger(opts.maxWidth)) {
    opts.maxWidth = defaultOpts.maxWidth
    error = optsError(`'maxWidth' must be a string or an integer`)
  }
  if (isString(opts.maxWidth)) {
    const [widthValue] = expandMaxWidth(opts.maxWidth)
    if (!isInteger(widthValue)) {
      error = optsError(`'maxWidth' must, if it's a string, be in the format 'n%' where 'n' is an unsigned integer`)
    }
  }
  if (!isInteger(opts.indentAmount) && !(isArrayOfIntegers(opts.indentAmount) && opts.indentAmount.length === 2)) {
    opts.indentAmount = defaultOpts.indentAmount
    error = optsError(`'indentAmount' must be an integer or an array of integers of length === 2`)
  }
  if (!isString(opts.indentChar) || opts.indentChar.length === 0) {
    opts.indentChar = defaultOpts.indentChar
    error = optsError(`'indentChar' must be a string of length > 0 (set 'indentAmount' to 0 if no indent is required)`)
  }
  if (opts.textDirection !== 'ltr' && opts.textDirection !== 'rtl') {
    opts.textDirection = defaultOpts.textDirection
    error = optsError(`'textDirection' must be one of {'ltr', 'rtl'}`)
  }
  if (!isString(opts.whitespaceChar)) {
    opts.whitespaceChar = defaultOpts.whitespaceChar
    error = optsError(`'whitespaceChar' must be a string`)
  }
  if (!isString(opts.newlineChar)) {
    opts.newlineChar = defaultOpts.newlineChar
    error = optsError(`'newlineChar' must be a string)`)
  }
  if (opts.indentType !== 'repeat' && opts.indentType !== 'crop') {
    opts.indentType = defaultOpts.indentType
    error = optsError(`'indentType' must be one of {'repeat', 'crop'}`)
  }
  if (!isFunctionOrNull(opts.lineCallback)) {
    opts.lineCallback = defaultOpts.lineCallback
    error = optsError(`'lineCallback' must be a function or null`)
  }

  if (throwOnError && error) {
    throw error
  }

  return opts
}

module.exports = {
  validateOpts
}

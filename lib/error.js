// wordwrap-cjk <https://github.com/msikma/wordwrap-cjk>
// © MIT license

/**
 * Error that is thrown when an option passed to stringwrap is incorrect.
 */
const optsError = message => (
  new class StringWrapOptionsError extends Error {
    constructor(args) {
      super(args)
      this.code = 'STRINGWRAP_OPTS_ERROR'
      this.message = message
    }
  }
)

module.exports = {
  optsError
}

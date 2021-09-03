// wordwrap-cjk <https://github.com/msikma/wordwrap-cjk>
// © MIT license

/** Default options. */
const defaultOpts = {
  // Maximum width of the output. This can be either a number value or a percentage such as '100%'.
  // If a percentage is given, the value is calculated based on the terminal size.
  maxWidth: 80,

  // Whether to determine string length based on the visual width of the characters.
  // This means wide characters (such as CJK wide characters or emoji) count double.
  useVisualWidth: true,

  // Whether to break really long words (longer than the available space) up into chunks.
  // If this is false, words that are too long are added as-is.
  breakLongWords: true,

  // Whether to insert a newline before a long word that exceed the maximum width.
  newlineBeforeLongWords: false,

  // Amount of indentation.
  indentAmount: 0,

  // The character used to indent the string. This string is repeated until the indent is reached.
  indentChar: ' ',

  // There are two types of indent: either the indent string is repeated as many times as the indent amount
  // indicates (called 'repeat'), or (in the case of a multiple character indent string) repeat the string
  // until its length is as long as the indent amount ('crop'). In most cases you'd want 'repeat'.
  indentType: 'repeat', // or 'crop'

  // The character used to create newlines.
  newlineChar: '\n',

  // Callback function that runs on each line as it's split. Performed before any line trimming is done.
  // If the callback function returns null or undefined, the line is skipped entirely.
  lineCallback: null,

  // Whether to normalize all whitespace characters to the same one.
  // Set this to false to maintain all existing whitespace characters exactly.
  whitespaceNormalize: true,

  // Whether to trim the end of the result string.
  whitespaceTrim: true,

  // Character to convert all whitespace to, if 'whitespaceNormalize' is true.
  whitespaceChar: ' ',

  // Which direction the text goes; this flips all left/right values if 'rtl'.
  textDirection: 'ltr',

  // Whether to pad all lines to the full (visual) line width.
  padToMaxWidth: false,

  // Whether to maintain wide spaces. This is an exception to the 'whitespaceNormalize' rule.
  // Normally all whitespace characters, including wide whitespace characters, would be
  // normalized to a single space character. However, this would mess up CJK text that uses
  // wide spaces. Setting this option to 'true' only affects CJK text by maintaining its wide spaces,
  // while keeping non-CJK text intact. It can safely be kept 'true' even if you're never planning
  // on running stringwrap on CJK text.
  whitespaceMaintainWideSpace: true,

  // Whether to maintain linebreaks when normalizing whitespace.
  whitespaceMaintainLinebreaks: false,

  // If any of the passed options are invalid, revert to using the defaults rather than throwing.
  throwOnError: true
}

module.exports = defaultOpts

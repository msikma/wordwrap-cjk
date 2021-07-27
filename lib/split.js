// stringwrap-cjk <https://github.com/msikma/stringwrap-cjk>
// © MIT license

const stringWidth = require('string-width')
const isFullwidthCodePoint = require('is-fullwidth-code-point')

/**
 * Splits a string into segments of wide characters of length 1, and segments of
 * non-wide characters of arbitrary length.
 * 
 * This is used to be able to properly break lines of CJK language text.
 * The only CJK wide character that is not split on is the wide space, as we
 * need to be able to normalize it later.
 */
const splitOnCJK = str => {
  const items = []

  let item = []
  let prevWide = false
  for (let a = 0, z = str.length; a < z; ++a) {
    const char = str[a]

    const isLastChar = a === z - 1
    const isWide = isFullwidthCodePoint(str.codePointAt(a))
    const isWideSpace = char.match(/\u3000/) != null

    if (isWide && !prevWide && item.length > 0) {
      items.push(item.join(''))
      item = []
    }

    item.push(char)
    
    if ((isWide && !isWideSpace) || isLastChar) {
      items.push(item.join(''))
      item = []
    }
    prevWide = isWide
  }

  return items
}

/**
 * Splits a string on whitespace (keeping the whitespace), and on CJK wide characters.
 * 
 * This is used for wrapping text in such a way that Latin character text is broken
 * up by words, and CJK text is broken by single characters.
 */
const splitOnWordsOrCJK = str => {
  const segments = []
  const split = str.split(/(\s+)/)
  for (const item of split) {
    const itemWideSplit = splitOnCJK(item)
    segments.push(...itemWideSplit)
  }
  return segments
}

/**
 * Splits a string based on a given maximum width.
 * 
 * This is used to split up very long words that are larger than the maximum width.
 * If a single character is longer than the maximum width, it will be used regardless
 * and the maximum width will exceed the requested amount.
 */
const splitOnMaxWidth = (str, maxWidth, currPosition = 0) => {
  const segments = []
  let item = []
  let itemWidth = currPosition

  for (let a = 0, z = str.length; a < z; ++a) {
    const char = str[a]
    const width = stringWidth(char)
    const isWiderThanMax = width === 2 && maxWidth < 2

    if (itemWidth + width > maxWidth && !isWiderThanMax) {
      segments.push(item.join(''))
      item = []
      itemWidth = 0
    }
    
    item.push(char)
    itemWidth += width

    if (a === z - 1) {
      segments.push(item.join(''))
    }
  }
  
  return segments
}

module.exports = {
  splitOnCJK,
  splitOnMaxWidth,
  splitOnWordsOrCJK
}

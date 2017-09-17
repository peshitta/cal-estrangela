/**
* @file Convert from CAL code to Estrangela ASCII font code
* @version 1.0.0
* @author Greg Borota
* @copyright (c) 2017 Greg Borota.
* @license MIT
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// https://peshitta.github.io
// http://cal1.cn.huc.edu/searching/fullbrowser.html
// http://www.peshitta.org/initial/standard.html
// http://www.peshitta.org/initial/software.html

import { Mapper, Writing } from 'aramaic-mapper';
import { consonants, diacritics, vowels } from 'cal-code-util';
import { baseConsonants, baseDiacritics, commonVowels, easternVowels, endify } from 'estrangela-code-util';

/** @module cal */
/**
 * @private
 * Aramaic mapper
 */
var mapper = new Mapper(new Writing(consonants, vowels, diacritics), new Writing(baseConsonants, commonVowels.concat([';']).concat(easternVowels), baseDiacritics));

/**
 * Convert from CAL to Estrangela ASCII font coding
 * @name toEstrangela
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Estrangela ASCII font
 */
var main = (function (word) {
  var mappedWord = mapper.map(word);
  return endify(mappedWord);
});

export default main;

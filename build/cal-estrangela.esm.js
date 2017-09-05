/**
 * @file Utility to convert between CAL code and Estrangela ASCII font
 * @module sedra.util
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
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// https://peshitta.github.io
// http://www.peshitta.org/initial/standard.html
// http://www.peshitta.org/initial/software.html
// http://cal1.cn.huc.edu/searching/fullbrowser.html

/**
 * Estrangela consonants
 * @constant
 * @type { string[] }
*/
const estrangelaConsonants = [
  '0',

  'b',
  'B',

  'g',
  'G',

  'd',
  'h',
  'w',
  'z',

  'x',
  'X',

  '=',
  '+',

  'y',
  'Y',

  'k',
  'K',
  '<',

  'l',
  'L',

  'm',
  'M',

  'n',
  'N',
  'J',

  's',
  'S',

  '9',
  '(',

  'p',
  'P',

  'c',

  'q',
  'Q',

  'r',

  '4',
  '$',

  't',

  'f',
  'F'
];

/**
 * Estrangela vowels
 * @constant
 * @type { string[] }
*/
const estrangelaVowels = [
  'e',
  'E',

  'a',
  'A',

  'o',
  'O',

  ';',

  'i',
  'I',

  'u'
];

export { estrangelaConsonants, estrangelaVowels };

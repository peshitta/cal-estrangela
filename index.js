(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('sedra-cal')) :
	typeof define === 'function' && define.amd ? define(['sedra-cal'], factory) :
	(factory(global.sedraCal));
}(this, (function (sedraCal) { 'use strict';

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

console.log(sedraCal.sc.sedra2cal('AAB'));

})));

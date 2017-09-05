# cal-estrangela

[![npm version](https://badge.fury.io/js/cal-estrangela.svg)](https://badge.fury.io/js/cal-estrangela)
[![npm module downloads](http://img.shields.io/npm/dt/cal-estrangela.svg)](https://www.npmjs.org/package/cal-estrangela)
[![Build Status](https://travis-ci.org/peshitta/cal-estrangela.svg?branch=master)](https://travis-ci.org/peshitta/cal-estrangela)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-estrangela/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-estrangela.svg)](https://david-dm.org/peshitta/cal-estrangela)
[![devDependencies Status](https://david-dm.org/peshitta/cal-estrangela/dev-status.svg)](https://david-dm.org/peshitta/cal-estrangela?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-estrangela/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-estrangela?branch=master)

Utility to convert between
[CAL code](http://cal1.cn.huc.edu/searching/fullbrowser.html) and
[Estrangela](http://www.peshitta.org/initial/standard.html) ASCII font.

## Installation

```
npm install cal-estrangela --save
```

Following packages are available:
* `cal-estrangela.js` - UMD ES5 version for use in browser, node, etc.
* `cal-estrangela.min.js` - minified version of `cal-estrangela.js`
* `cal-estrangela.esm.js` - ES6 module for bundling with other libraries and
applications

## More information

[Peshitta App](https://peshitta.github.io)

[Font Encoding Chart](http://www.peshitta.org/initial/standard.html)

[Estrangela Font](http://www.peshitta.org/fonts/ESTRANG2.TTF)

[Estrangela Keyboard Map](http://www.peshitta.org/images/Keyestr.jpg)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/cal-estrangela/blob/master/LICENSE)

## Contributing

The main goal for this work is learning the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
If you would like to contribute, please email
[pshitto@gmail.com](mailto:pshitto@gmail.com) or feel free to
[Fork](https://help.github.com/articles/fork-a-repo/) or create a
[Pull Request](https://help.github.com/articles/about-pull-requests/).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [sedra.util](#sedra.module_util)
    * [.estrangelaConsonants](#sedra.module_util.estrangelaConsonants) : <code>Array.&lt;string&gt;</code>
    * [.estrangelaVowels](#sedra.module_util.estrangelaVowels) : <code>Array.&lt;string&gt;</code>

<a name="sedra.module_util.estrangelaConsonants"></a>

### sedra.util.estrangelaConsonants : <code>Array.&lt;string&gt;</code>
Estrangela consonants

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  
<a name="sedra.module_util.estrangelaVowels"></a>

### sedra.util.estrangelaVowels : <code>Array.&lt;string&gt;</code>
Estrangela vowels

**Kind**: static constant of [<code>sedra.util</code>](#sedra.module_util)  

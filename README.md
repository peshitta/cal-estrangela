# cal-estrangela

[![npm version](https://badge.fury.io/js/cal-estrangela.svg)](https://badge.fury.io/js/cal-estrangela)
[![npm module downloads](http://img.shields.io/npm/dt/cal-estrangela.svg)](https://www.npmjs.org/package/cal-estrangela)
[![Build Status](https://travis-ci.org/peshitta/cal-estrangela.svg?branch=master)](https://travis-ci.org/peshitta/cal-estrangela)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-estrangela/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-estrangela.svg)](https://david-dm.org/peshitta/cal-estrangela)
[![devDependencies Status](https://david-dm.org/peshitta/cal-estrangela/dev-status.svg)](https://david-dm.org/peshitta/cal-estrangela?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-estrangela/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-estrangela?branch=master)

Convert from [CAL code](http://cal1.cn.huc.edu/searching/fullbrowser.html) to
[Estrangela](http://www.peshitta.org/initial/standard.html) ASCII font code

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-estrangela --save
```

Following packages are available:
* `cal-estrangela.js` - UMD ES5 version for use in browser, node, etc.
* `cal-estrangela.min.js` - minified version of `cal-estrangela.js`
* `cal-estrangela.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-estrangela/-/cal-estrangela-1.0.5.tgz](https://registry.npmjs.org/cal-estrangela/-/cal-estrangela-1.0.5.tgz)

## More information

Note: Eastern Estrangela font has no support for standalone **i** and **u**
vowels, without supporting **y** or **w** respectively. `toEstrangela`
conversion may lose those vowels.
E.g. u in `metul`, words imported from Greek like `Caesarea`, etc.

[Peshitta App](https://peshitta.github.io)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

[Estrangela Font Encoding Chart](http://www.peshitta.org/initial/standard.html)

[Estrangela ASCII font](http://www.peshitta.org/initial/software.html)

For Estrangela to CAL conversion see:
[estrangela-cal](https://github.com/peshitta/estrangela-cal)

## License

[MIT](https://github.com/peshitta/cal-estrangela/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-estrangela/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [cal](#module_cal)
    * [.mapper](#module_cal.mapper) : <code>Mapper</code>
    * [.toEstrangela](#module_cal.toEstrangela) ⇒ <code>string</code>
    * [.removeDotting](#module_cal.removeDotting) ⇒ <code>string</code>

<a name="module_cal.mapper"></a>

### cal.mapper : <code>Mapper</code>
Aramaic Mapper

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.toEstrangela"></a>

### cal.toEstrangela ⇒ <code>string</code>
Convert from CAL to Estrangela ASCII font coding

**Kind**: static constant of [<code>cal</code>](#module_cal)  
**Returns**: <code>string</code> - the input word converted to Estrangela ASCII font  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

<a name="module_cal.removeDotting"></a>

### cal.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>cal</code>](#module_cal)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |


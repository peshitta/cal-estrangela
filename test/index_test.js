const test = require('assert');
const toEstrangela = require('../build/cal-estrangela');

describe('CAL', () => {
  describe('To Estrangela', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = toEstrangela('dqsry)-dpylypws');
      const wordExpected = 'dqsry0-dpylypwS';
      const vocalised = toEstrangela("d'qesariya)-d,p,yilyip'wOs");
      const vocalisedExpected = 'd2qoser;ye0-d3p3y;ly;p2wuS';
      test.strictEqual(word, wordExpected, 'toEstrangela_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'toEstrangela_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = toEstrangela('dylydwth');
      const wordExpected = 'dylydwth';
      const vocalised = toEstrangela("d'yilyid,wut,eh");
      const vocalisedExpected = 'd2y;ly;d3w;t3oh';
      test.strictEqual(word, wordExpected, 'toEstrangela_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toEstrangela_yi vocalised');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = toEstrangela(')wld');
      const wordExpected = '0wld';
      const vocalised = toEstrangela(')awlEd');
      const vocalisedExpected = '0ewlid';
      test.strictEqual(word, wordExpected, 'toEstrangela_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toEstrangela_yi vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = toEstrangela('lb(ldbbykwn');
      const wordExpected = 'lb9ldbbykwJ';
      const vocalised = toEstrangela("lab,(eld'b,ob,ayk'wun");
      const vocalisedExpected = 'leb39old2b3ab3eyk2w;J';
      test.strictEqual(word, wordExpected, 'toEstrangela_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toEstrangela_wu vocalised');
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = toEstrangela(')bhwhy');
      const vocalised = toEstrangela(')ab,ohawh_y');
      const wordExpected = '0bhwhY';
      const vocalisedExpected = '0eb3ahewh5Y';
      test.strictEqual(word, wordExpected, 'toEstrangela_wO consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'toEstrangela_wO vocalised');
    });
    it('Blank word returns blank', () => {
      const word = toEstrangela('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'toEstrangela_blank');
    });
    it('Null word returns null', () => {
      const word = toEstrangela(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'toEstrangela_null');
    });
    it('Undefined word returns undefined', () => {
      const word = toEstrangela(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'toEstrangela_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = toEstrangela(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'toEstrangela_zero');
    });
  });
});

/** @module cal */
import { Writing, Mapper } from 'aramaic-mapper';
import { consonants, vowels, diacritics } from 'cal-code-util';
import {
  baseConsonants as eConsonants,
  commonVowels as eCommonVowels,
  easternVowels as eEasternVowels,
  baseDiacritics as eDiacritics,
  endify
} from 'estrangela-code-util';

/**
 * @private
 * Aramaic mapper
 */
const mapper = new Mapper(
  new Writing(consonants, vowels, diacritics),
  new Writing(
    eConsonants,
    eCommonVowels.concat([';']).concat(eEasternVowels),
    eDiacritics
  )
);

/**
 * Convert from CAL to Estrangela ASCII font coding
 * @name toEstrangela
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Estrangela ASCII font
 */
export default word => {
  const mappedWord = mapper.map(word);
  return endify(mappedWord);
};

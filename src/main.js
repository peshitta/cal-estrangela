/** @module cal */
import { Writing, Mapper } from 'aramaic-mapper';
import { allConsonants as consonants, vowels, diacritics } from 'cal-code-util';
import {
  baseConsonants as eConsonants,
  commonVowels as eVowels,
  easternVowels as eEasternVowels,
  commonDiacritics as eDiacritics,
  endify
} from 'estrangela-code-util';

/**
 * CAL source writing
 * @const
 * @type { Writing }
 */
export const calWriting = new Writing(consonants, vowels, diacritics);

/**
 * Estrangela destination writing
 * @const
 * @type { Writing }
 */
export const estrangelaWriting = new Writing(
  eConsonants.concat('p', 's'),
  eVowels.concat([';']).concat(eEasternVowels),
  eDiacritics
);

/**
 * Convert from CAL to Estrangela ASCII font coding
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Estrangela ASCII font
 */
export const toEstrangela = word => {
  const mappedWord = new Mapper(calWriting, estrangelaWriting).map(word);
  return endify(mappedWord);
};

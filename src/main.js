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
 * @private
 * CAL source writing
 * @const
 * @type { Writing }
 */
const calWriting = new Writing(consonants, vowels, diacritics);

/**
 * @private
 * Estrangela destination writing
 * @const
 * @type { Writing }
 */
const estrangelaWriting = new Writing(
  Object.freeze(eConsonants.concat('p', 's')),
  Object.freeze(eVowels.concat([';']).concat(eEasternVowels)),
  eDiacritics
);

/**
 * Aramaic Mapper
 * @const
 * @type { Mapper }
 */
export const mapper = new Mapper(calWriting, estrangelaWriting);

/**
 * Convert from CAL to Estrangela ASCII font coding
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to Estrangela ASCII font
 */
export const toEstrangela = word => {
  const mappedWord = mapper.map(word);
  return endify(mappedWord);
};

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @static
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = word => mapper.removeDotting(word);

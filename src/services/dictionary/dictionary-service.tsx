import {
    apiDictionaryDefinition,
    apiDictionaryLexicalRelations,
} from '@/request';
import { elementToString, removeQuotationMarks } from '@/utils';
import cheerio from 'cheerio';

export const getDictionaryDefinitionWord = async (word: string) => {
    const html = await apiDictionaryDefinition.get(word);

    if (html) {
        const $htmlDecryption = cheerio.load(html);

        const childrenElements = $htmlDecryption('ol').first().children();

        const childrenTexts = childrenElements.map((index, element) =>
            removeQuotationMarks($htmlDecryption(element).text())
        );

        return childrenTexts;
    }
};

export const getDictionaryLexicalRelationsWord = async (word: string) => {
    const html = await apiDictionaryLexicalRelations.get(word);

    if (html) {
        const $htmlDecryption = cheerio.load(html);

        const childrenElementsSynonym = $htmlDecryption('#article div > ul')
            .not('ul > li')
            .children();

        const childrenTextsSynonym = childrenElementsSynonym.map(
            (index, element) =>
                removeQuotationMarks($htmlDecryption(element).text())
        );

        const synonyms = elementToString(childrenTextsSynonym).filter(
            (element) => !element.startsWith('Antónimos:') && element !== ''
        );

        const antonyms = elementToString(childrenTextsSynonym).filter(
            (element) => element.startsWith('Antónimos:') && element !== ''
        );

        return { synonyms, antonyms };
    }
};

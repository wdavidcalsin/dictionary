import { apiDictionary } from '@/request';
import { removeQuotationMarks } from '@/utils';
import cheerio from 'cheerio';

export const getDictionaryDefinitionWord = async (word: string) => {
    const html = await apiDictionary.get(word);

    if (html) {
        const $htmlDecryption = cheerio.load(html);

        const childrenElements = $htmlDecryption('ol').first().children();

        const childrenTexts = childrenElements.map((index, element) =>
            removeQuotationMarks($htmlDecryption(element).text())
        );

        return childrenTexts;
    }
};

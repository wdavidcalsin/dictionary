import {
    getDictionaryDefinitionWord,
    getDictionaryLexicalRelationsWord,
} from '@/services';
import { ISearchContext, ISearchState } from '@/types';
import { elementToString } from '@/utils';

export const searchConstant = (state: ISearchState): ISearchContext => {
    const { word, setWord, wordFound, setWordFound } = state;

    return {
        handleChangeSearchWord: (event) => {
            setWord(event.target.value);
        },

        handleClickSearchWord: async () => {
            const definition = await getDictionaryDefinitionWord(word);

            const lexicalRelations = await getDictionaryLexicalRelationsWord(
                word
            );

            if (definition && lexicalRelations) {
                setWordFound({
                    searchWord: word,
                    definitions: elementToString(definition),
                    synonyms: lexicalRelations.synonyms,
                    antonyms: lexicalRelations.antonyms,
                });
            }
        },

        searchWord: word,

        wordFound: wordFound,
    };
};

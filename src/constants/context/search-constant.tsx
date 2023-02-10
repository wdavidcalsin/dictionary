import { getDictionaryDefinitionWord } from '@/services';
import { ISearchContext, ISearchState } from '@/types';

export const searchConstant = (state: ISearchState): ISearchContext => {
    const { word, setWord, setDefinitions, definitions } = state;

    return {
        handleChangeSearchWord: (event) => {
            setWord(event.target.value);
        },

        handleClickSearchWord: async () => {
            const definition = await getDictionaryDefinitionWord(word);

            if (definition) {
                setDefinitions(
                    definition.map((index, word) => word.toString()).get()
                );
            }
        },

        searchWord: word,
        wordFound: definitions,
    };
};

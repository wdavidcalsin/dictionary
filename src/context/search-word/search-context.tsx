import { getDictionaryDefinitionWord } from '@/services';
import { ISearchContext, Props } from '@/types';
import * as React from 'react';

export const searchWordContext = React.createContext<ISearchContext>({
    handleChangeSearchWord: () => null,
    handleClickSearchWord: () => null,
    searchWord: '',
});

export const SearchWordContextProvider: React.FC<Props> = ({ children }) => {
    const [word, setWord] = React.useState<string>('');

    const search: ISearchContext = {
        handleChangeSearchWord: (event) => {
            setWord(event.target.value);
        },

        handleClickSearchWord: async () => {
            const definition = await getDictionaryDefinitionWord(word);

            if (definition) {
                definition.map((index, word) => console.log(word));
            }
        },

        searchWord: word,
    };

    return (
        <searchWordContext.Provider value={search}>
            {children}
        </searchWordContext.Provider>
    );
};

export const useSearchWord = () => React.useContext(searchWordContext);

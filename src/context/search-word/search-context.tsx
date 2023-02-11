import { searchConstant } from '@/constants';
import { ISearchContext, IWordFoundState, Props } from '@/types';
import * as React from 'react';

export const searchWordContext = React.createContext<ISearchContext>({
    handleChangeSearchWord: () => null,
    handleClickSearchWord: () => null,
    searchWord: '',
    wordFound: { searchWord: '', definitions: [], synonyms: [], antonyms: [] },
});

export const SearchWordContextProvider: React.FC<Props> = ({ children }) => {
    const [word, setWord] = React.useState<string>('');
    const [wordFound, setWordFound] = React.useState<IWordFoundState>({
        searchWord: '',
        definitions: [],
        synonyms: [],
        antonyms: [],
    });

    const search = searchConstant({
        word,
        setWord,
        wordFound,
        setWordFound,
    });

    return (
        <searchWordContext.Provider value={search}>
            {children}
        </searchWordContext.Provider>
    );
};

import { searchConstant } from '@/constants';
import { ISearchContext, Props } from '@/types';
import * as React from 'react';

export const searchWordContext = React.createContext<ISearchContext>({
    handleChangeSearchWord: () => null,
    handleClickSearchWord: () => null,
    searchWord: '',
    wordFound: [],
});

export const SearchWordContextProvider: React.FC<Props> = ({ children }) => {
    const [word, setWord] = React.useState<string>('');
    const [definitions, setDefinitions] = React.useState<string[]>([]);

    const search = searchConstant({
        word,
        setWord,
        definitions,
        setDefinitions,
    });

    return (
        <searchWordContext.Provider value={search}>
            {children}
        </searchWordContext.Provider>
    );
};

import { ISearchContext, Props } from '@/types';
import * as React from 'react';

export const searchWordContext = React.createContext<ISearchContext>({
    handleSearchWord: () => null,
    searchWord: '',
});

export const SearchWordContextProvider: React.FC<Props> = ({ children }) => {
    const [word, setWord] = React.useState<string>('');

    const search: ISearchContext = {
        handleSearchWord: (event) => {
            setWord(event.target.value);
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

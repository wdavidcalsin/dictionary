import * as React from 'react';

export interface ISearchContext {
    handleChangeSearchWord: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleClickSearchWord: () => void;
    searchWord: string;
    wordFound: string[];
}

export interface ISearchState {
    word: string;
    setWord: React.Dispatch<React.SetStateAction<string>>;
    definitions: string[];
    setDefinitions: React.Dispatch<React.SetStateAction<string[]>>;
}

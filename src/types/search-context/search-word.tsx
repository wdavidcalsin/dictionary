import * as React from 'react';

export interface ISearchContext {
    handleChangeSearchWord: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleClickSearchWord: () => void;
    searchWord: string;
    wordFound: IWordFoundState;
}

export interface IWordFoundState {
    searchWord: string;
    definitions: string[];
    synonyms?: string[];
    antonyms?: string[];
}

export interface ISearchState {
    word: string;
    setWord: React.Dispatch<React.SetStateAction<string>>;
    wordFound: IWordFoundState;
    setWordFound: React.Dispatch<React.SetStateAction<IWordFoundState>>;
}

import * as React from 'react';

export interface ISearchContext {
    handleSearchWord: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchWord: string;
}

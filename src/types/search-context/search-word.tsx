import * as React from 'react';

export interface ISearchContext {
    handleChangeSearchWord: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleClickSearchWord: () => void;
    searchWord: string;
}

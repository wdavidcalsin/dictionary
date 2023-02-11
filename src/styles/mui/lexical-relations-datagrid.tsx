import { SxProps } from '@mui/material';

export const dataGridStyled: SxProps = {
    textOverflow: 'initial',
    overflowX: 'auto',
    wordWrap: 'break-word',

    '.MuiDataGrid-row': {
        maxHeight: 'initial !important',
    },

    '.MuiDataGrid-cell': {
        maxHeight: 'initial !important',
    },

    '.MuiDataGrid-cellContent': {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        overflow: 'visible',
        textOverflow: 'initial',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
    },
};

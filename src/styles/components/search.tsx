import { makeStyles } from '@mui/styles';

export const useStylesInput = makeStyles((theme) => ({
    root: {
        color: `${theme.palette.secondary.contrastText} !important`,
        borderWidth: '1px',
        borderColor: `${theme.palette.secondary.contrastText} !important`,
    },
    label: {
        color: `${theme.palette.secondary.contrastText} !important`,
        borderWidth: '1px',
        borderColor: `${theme.palette.secondary.contrastText} !important`,
    },
}));

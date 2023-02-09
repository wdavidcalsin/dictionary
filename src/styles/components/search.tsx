import { makeStyles } from '@mui/styles';

export const useStylesInput = makeStyles((theme) => ({
    root: {
        color: theme.palette.secondary.contrastText,

        '&$cssFocused $notchedOutline': {
            borderColor: theme.palette.secondary.contrastText + '!important',
        },
    },
}));

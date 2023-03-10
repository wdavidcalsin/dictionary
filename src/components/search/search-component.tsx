import { useSearchWord } from '@/hooks';
import { useStylesInput } from '@/styles';
import { Box, Button, TextField } from '@mui/material';

const SearchWord = () => {
    const { handleChangeSearchWord, handleClickSearchWord } = useSearchWord();

    const classes = useStylesInput();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'primary.main',
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '50rem',
                        lg: '50rem',
                    },
                    paddingX: '1rem',
                }}
            >
                <TextField
                    variant="outlined"
                    label="Search word"
                    type="contrastText"
                    name="search"
                    onChange={handleChangeSearchWord}
                    InputLabelProps={{
                        classes: {
                            focused: classes.label,
                        },
                    }}
                    InputProps={{
                        classes: {
                            focused: classes.label,
                            notchedOutline: classes.root,
                        },
                    }}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '20rem',
                            md: '30rem',
                            lg: '30rem',
                        },
                    }}
                />
                <Button
                    onClick={handleClickSearchWord}
                    variant="outlined"
                    color="secondary"
                    sx={{
                        color: 'secondary.contrastText',
                        bgcolor: 'secondary.main',
                        height: {
                            xs: '3rem',
                            sm: '100%',
                        },
                        marginY: {
                            xs: '1rem',
                            sm: '0',
                        },
                        marginLeft: {
                            xs: '0',
                            sm: '1rem',
                        },
                    }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    );
};

export default SearchWord;

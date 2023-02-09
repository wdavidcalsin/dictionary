import { useSearchWord } from '@/context';
import { useStylesInput } from '@/styles';
import { Box, Button, TextField } from '@mui/material';

const SearchWord = () => {
    const { handleSearchWord } = useSearchWord();

    const classes = useStylesInput();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingY: '5rem',
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
                }}
            >
                <TextField
                    variant="outlined"
                    label="Search word"
                    type="contrastText"
                    name="search"
                    onChange={handleSearchWord}
                    InputProps={{
                        className: classes.root,
                    }}
                />
                <Button
                    variant="outlined"
                    sx={{ color: 'secondary.contrastText' }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    );
};

export default SearchWord;

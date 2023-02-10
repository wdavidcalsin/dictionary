import { useSearchWord } from '@/hooks';
import { Definition, EmptySearchPrompt } from '@/sub-components';
import { Box } from '@mui/material';

const ShowWordFound = () => {
    const { wordFound } = useSearchWord();

    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '40rem',
                    height: '100%',
                }}
            >
                {wordFound.searchWord ? <Definition /> : <EmptySearchPrompt />}
            </Box>
        </Box>
    );
};

export default ShowWordFound;

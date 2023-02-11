import { Box, Typography } from '@mui/material';
import Antonyms from './antonyms';
import Synonyms from './synonyms';

const LexicalRelations = () => {
    return (
        <Box sx={{ paddingBottom: '5rem' }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'left',
                    color: 'secondary.contrastText',
                    fontWeight: 'bold',
                    paddingY: '2rem',
                }}
            >
                Relaciones léxicas
            </Typography>
            <Box
                sx={{
                    height: 370,
                    width: '100%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                }}
            >
                <Synonyms />
                <Antonyms />
            </Box>
        </Box>
    );
};

export default LexicalRelations;

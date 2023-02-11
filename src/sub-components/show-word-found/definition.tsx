import { useSearchWord } from '@/hooks';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

const Definition = () => {
    const { wordFound } = useSearchWord();

    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'left',
                    color: 'secondary.contrastText',
                    fontWeight: 'bold',
                    paddingY: '1rem',
                }}
            >
                Definición : {wordFound.searchWord}
            </Typography>
            <List sx={{ paddingX: '0', marginX: '0' }}>
                {wordFound.definitions.map((word, index) => (
                    <>
                        <ListItem
                            sx={{
                                color: 'secondary.contrastText',
                                paddingX: '0',
                                marginX: '0',
                            }}
                        >
                            {index}: {word}
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );
};

export default Definition;

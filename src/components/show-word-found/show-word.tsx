import { useSearchWord } from '@/hooks';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';

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
            <Box sx={{ width: '40rem' }}>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'left',
                        color: 'secondary.contrastText',
                        fontWeight: 'bold',
                    }}
                >
                    Definitions
                </Typography>
                <List sx={{ paddingX: '0', marginX: '0' }}>
                    {wordFound.map((word, index) => (
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
        </Box>
    );
};

export default ShowWordFound;

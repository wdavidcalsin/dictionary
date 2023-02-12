import { useSearchWord } from '@/hooks';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import SeparateDefinitionAndExample from './separate-definition';

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
                Definiciónes : {wordFound.searchWord}
            </Typography>
            <List sx={{ paddingX: '0', marginX: '0' }}>
                {wordFound.definitions.map((word, index) => (
                    <>
                        <ListItem
                            key={index}
                            sx={{
                                color: 'secondary.contrastText',
                                paddingX: '0',
                                marginX: '0',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold' }}
                            >
                                {index}
                                {')'}
                            </Typography>

                            {SeparateDefinitionAndExample(word)}
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );
};

export default Definition;

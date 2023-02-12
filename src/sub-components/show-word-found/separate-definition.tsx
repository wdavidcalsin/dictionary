import { Box, Typography } from '@mui/material';

const SeparateDefinitionAndExample = (definition: string) => {
    const separateText = definition.split(':');

    return (
        <Box sx={{ paddingLeft: '.3rem' }}>
            <Typography
                variant="body1"
                sx={{
                    fontSize: '1.1rem',
                    display: 'inline',
                }}
            >
                {separateText[0]}
            </Typography>
            :{'\n'}
            <Typography
                variant="body1"
                sx={{
                    textDecorationStyle: 'double',
                    textDecorationLine: 'underline',
                    fontWeight: 'bold',
                    display: 'inline',
                    color: 'secondary.contrastText',
                    fontSize: '0.8rem',
                }}
            >
                Ejemplo,
            </Typography>
            {'\n'}
            <Typography
                variant="body2"
                sx={{
                    display: 'inline',
                    color: 'secondary.contrastText',
                    fontStyle: 'italic',
                }}
            >
                {separateText[1]}
            </Typography>
        </Box>
    );
};

export default SeparateDefinitionAndExample;

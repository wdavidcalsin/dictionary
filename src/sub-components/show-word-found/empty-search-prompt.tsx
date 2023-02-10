import { Box, Typography } from '@mui/material';

const EmptySearchPrompt = () => {
    return (
        <Box
            sx={{
                width: '100%',
                border: '2px dashed',
                borderColor: 'custom.border',
                borderRadius: '1rem',
                height: '14rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h5"
                sx={{ color: 'custom.text', fontSize: '1.2rem' }}
            >
                Por favor, introduzca una palabra para buscar su definición.
            </Typography>
        </Box>
    );
};

export default EmptySearchPrompt;

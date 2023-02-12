import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface propsEmptySearch {
    message: string;
}

const EmptySearchPrompt: React.FC<propsEmptySearch> = (props) => {
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
                {props.message}
            </Typography>
        </Box>
    );
};

export default EmptySearchPrompt;

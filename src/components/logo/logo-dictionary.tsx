import { IconDictionary } from '@/assets';
import { Box, Fade } from '@mui/material';

const LogoDictionary = () => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                paddingY: {
                    xs: '2rem',
                    sm: '3rem',
                },
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: '5rem',
                        sm: '8rem',
                    },
                    height: 'auto',
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Fade>
                    <IconDictionary />
                </Fade>
            </Box>
        </Box>
    );
};

export default LogoDictionary;

import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.main',
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                <Typography sx={{ color: 'custom.text2', fontWeight: 'bold' }}>
                    Created by
                </Typography>
                <Typography
                    sx={{
                        color: 'secondary.contrastText',
                        paddingLeft: '.3rem',
                        fontWeight: 'bold',
                    }}
                >
                    Willian David
                </Typography>
            </Box>
            <IconButton
                href="https://github.com/wdavidcalsin/dictionary"
                target={'_blank'}
            >
                <GitHubIcon sx={{ color: 'secondary.contrastText' }} />
            </IconButton>
        </Box>
    );
};
export default Footer;

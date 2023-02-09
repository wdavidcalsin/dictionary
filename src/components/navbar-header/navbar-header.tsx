import { useColorMode } from '@/context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Fade, IconButton, Zoom } from '@mui/material';

const iconStyle = {
    color: 'secondary.contrastText',
    fontSize: '2rem',
};

const NavbarHeader = () => {
    const { mode, toggleColorMode } = useColorMode();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'right',
                    lg: 'right',
                },
                alignContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.main',
                height: '5rem',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    marginRight: {
                        xs: '0',
                        sm: '0',
                        md: '2rem',
                        lg: '2rem',
                    },
                }}
            >
                <IconButton
                    aria-label="mode"
                    component="label"
                    onClick={toggleColorMode}
                    sx={{
                        height: 'auto',
                        borderRadius: '100%',
                    }}
                >
                    {mode === 'light' ? (
                        <Fade in={mode === 'light'}>
                            <DarkModeIcon sx={iconStyle} />
                        </Fade>
                    ) : (
                        <Zoom in={mode === 'dark'}>
                            <LightModeIcon sx={iconStyle} />
                        </Zoom>
                    )}
                </IconButton>
            </Box>
        </Box>
    );
};

export default NavbarHeader;

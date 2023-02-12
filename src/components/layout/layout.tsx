import { Props } from '@/types';
import { Box } from '@mui/material';
import * as React from 'react';
import { Footer } from '../footer';
import { NavbarHeader } from '../navbar-header';

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'primary.main' }}>
            <NavbarHeader />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;

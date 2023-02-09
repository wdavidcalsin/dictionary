import { Props } from '@/types';
import { Box } from '@mui/material';
import * as React from 'react';
import { NavbarHeader } from '../navbar-header';

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box>
            <NavbarHeader />
            {children}
        </Box>
    );
};

export default Layout;

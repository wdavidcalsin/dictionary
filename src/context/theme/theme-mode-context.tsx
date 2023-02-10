import { getDesignTokens } from '@/styles';
import { IColorModeContext, Props, themeMode } from '@/types';
import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

export const colorModeContext = React.createContext<IColorModeContext>({
    toggleColorMode: () => null,
    mode: 'light',
});

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
    const [mode, setMode] = React.useState<themeMode>('light');

    const colorMode = React.useMemo(
        (): IColorModeContext => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                );
            },
            mode,
        }),
        [mode]
    );

    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return (
        <colorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </colorModeContext.Provider>
    );
};

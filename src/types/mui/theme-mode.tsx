export type themeMode = 'dark' | 'light';

export interface IColorModeContext {
    toggleColorMode: () => void;
    mode: themeMode;
}

export interface Props {
    children: React.ReactNode;
}

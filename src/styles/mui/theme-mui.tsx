import { themeMode } from '@/types';

export const getDesignTokens = (mode: themeMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  primary: {
                      main: '#EEEEEE',
                  },
                  secondary: {
                      main: '#00ADB5',
                      contrastText: '#222831',
                  },
                  border: {
                      main: '#222831',
                  },
                  custom: {
                      text: '#6B6F75',
                      border: '#6B6F75',
                      text2: '#00ADB5',
                  },
              }
            : {
                  primary: {
                      main: '#222831',
                  },
                  secondary: {
                      main: '#393E46',
                      contrastText: '#EEEEEE',
                  },
                  border: {
                      main: '#EEEEEE',
                  },
                  custom: {
                      text: '#434850',
                      border: '#434850',
                      text2: '#00ADB5',
                  },
              }),
    },
});

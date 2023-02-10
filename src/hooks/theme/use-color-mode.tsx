import { colorModeContext } from '@/context';
import * as React from 'react';

export const useColorMode = () => React.useContext(colorModeContext);

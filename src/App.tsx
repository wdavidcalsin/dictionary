import './App.css';
import { SearchWordContextProvider, ThemeContextProvider } from './context';
import Home from './pages/home';
import './global.d.ts';

function App() {
    return (
        <ThemeContextProvider>
            <SearchWordContextProvider>
                <Home />
            </SearchWordContextProvider>
        </ThemeContextProvider>
    );
}

export default App;

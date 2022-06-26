import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {GalleriesProvider} from './context/GalleriesContext'
import theme from './themes/defaultTheme';
import Index from './pages/';
import './globalStyle.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GalleriesProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Index />}></Route>
                    </Routes>
                </BrowserRouter>
            </GalleriesProvider>
        </ThemeProvider>
    )
}

export default App;
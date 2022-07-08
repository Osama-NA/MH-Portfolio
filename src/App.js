import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './themes/defaultTheme';
import Index from './pages/';
import './globalStyle.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Index />}></Route>
                    </Routes>
                </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
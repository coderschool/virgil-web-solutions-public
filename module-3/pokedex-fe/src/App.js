import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './layouts/MainFooter';
import Header from './layouts/MainHeader';
import { PageTitle } from './components/PageTitle';
import PokeList from './components/PokeList';
import { SearchBox } from './components/SearchBox';
import { MThemeProvider } from './themeContext/MThemeProvider';
import MainLayout from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
    return (
        <div className="App">
            <MThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="/:id" element={<DetailPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </MThemeProvider>
        </div>
    );
}

export default App;

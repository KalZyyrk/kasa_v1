import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home'
import ErrorPage from './ErrorPage';
import About from './About';
import Lodging from './Lodging';

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/logements/:logementId' element={<Lodging />} />

                <Route path='/*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}
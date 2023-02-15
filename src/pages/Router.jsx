import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home'

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}
import { Routes, Route } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}
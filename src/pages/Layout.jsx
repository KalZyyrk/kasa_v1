import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";



export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};


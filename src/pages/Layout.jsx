import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
    console.log('Working on Layout');
    return (
        <div className="layout">
            <Outlet />
            <Footer />
        </div>
    );
};
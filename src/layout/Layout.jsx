import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Layout.css"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container-section">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout
import { Outlet } from "react-router-dom";

import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Homebar from "./components/Homebar";

import "./css/layout.css"

function MainLayout({scrollRef}) {

    return (
        <>
            <div className="container">
                <div id="content">
                    <Profile />
                    <Navbar scrollRef={scrollRef}/>
                    <Homebar />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;
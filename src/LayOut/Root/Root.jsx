import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen  flex mx-auto mt-3 justify-center">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
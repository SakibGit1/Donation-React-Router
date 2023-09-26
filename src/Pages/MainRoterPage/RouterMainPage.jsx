import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";


const RouterMainPage = () => {
    return (
        <div>
        <div className="py-5">
            <div className="mb-5" >
            <Navbar></Navbar>
            </div>
            

            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default RouterMainPage;
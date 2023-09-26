import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-10">
                <div>
                    <img  width='150px' src="/public/Logo.png" alt="" />
                </div>
                <div >
                    <NavLink className='mr-5' to='/'>Home</NavLink>
                    <NavLink className='mr-5' to='/donation'>Donation</NavLink>
                    <NavLink className='mr-5' to='/statistic'>Statistic</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
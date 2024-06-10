import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const menu = (
        <>
            <li><Link className="text-lg" to="/">Home</Link></li>
            <li><Link className="text-lg" to="/bio-data">Biodates</Link></li>
            <li><Link className="text-lg" to="/about">About Us</Link></li>
            <li><Link className="text-lg" to="/contact">Contact Us</Link></li>
            {user && <li><Link className="text-lg" to="/dashboard">Dashboard</Link></li>}
        </>
    );

    const btn = (
        <>
            <Link className="btn btn-outline mr-2" to='/registration'>Sign Up</Link>
            <Link className="btn btn-primary" to='/login'>Sign In</Link>
        </>
    );

    const profile = (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "https://i.ibb.co/9rrBVK6/man.jpg"} alt="User Avatar" />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-50">
                <li className="text-center font-bold">{user?.displayName}</li>
                <li><button onClick={logout} className="btn btn-outline w-full mt-2">Logout</button></li>
            </ul>
        </div>
    );

    return (
        <div className="navbar bg-purple-600 text-white px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {menu}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-bold ml-2">Matrimony</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-4">
                {user ? profile : btn}
            </div>
        </div>
    );
};

export default Header;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Header = () => {

    const {user, logout} = useContext(AuthContext);

    const menu = <>
        <Link className="p-4 text-2xl" to="/"><li>Home</li></Link>
        <Link className="p-4 text-2xl" to="/bio-data"><li>Biadates</li></Link>
        <Link className="p-4 text-2xl" to="/about"><li>About Us</li></Link>
        <Link className="p-4 text-2xl" to="/contact"><li>Contact Us</li></Link>
        {user? <Link className="p-4 text-2xl" to="/dashboard"><li>Dashboard</li></Link>:""}
    </>

    const btn = <>
        <Link className="btn" to='/registration'>Sign Up</Link>
        <Link className="btn" to='/login'>Sign In</Link>
    </>

    const profile = <>
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user?.photoURL ? (<img alt="Tailwind CSS Navbar component" src={user.photoURL} />) : (<img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/9rrBVK6/man.jpg" />)}
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <Link>{user?.displayName ? `${user.displayName}` : ''}</Link>
                    <Link><button onClick={logout}>Logout</button></Link>
                </ul>
            </div>
        </div>
    </>

    // const logout = 

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to="/"><a className="btn btn-ghost text-xl">Matrimony</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="mr-4 text-xl" to="/login">Login</Link>
                <Link className="text-xl" to="/registration">Registration</Link>
            </div> */}
            <div className="navbar-end">
                {user ? profile : btn}
            </div>
        </div>
    );
};

export default Header;
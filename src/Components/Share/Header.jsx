import { Link } from "react-router-dom";

const Header = () => {
    const menu = <>
        <Link className="p-4 text-2xl" to="/"><li>Home</li></Link>
        <Link className="p-4 text-2xl" to="/"><li>Biadates</li></Link>
        <Link className="p-4 text-2xl" to="/"><li>Contact</li></Link>
    </>
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
            <div className="navbar-end">
                <Link className="mr-4 text-xl" to="/login">Login</Link>
                <Link className="text-xl" to="/registration">Registration</Link>
            </div>
        </div>
    );
};

export default Header;
import { useContext } from "react";
import { FaAd, FaBook, FaCalendar, FaEdit, FaEnvelope, FaHome, FaList, FaPlus, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { FaUsersViewfinder } from "react-icons/fa6";
import { CiLogout, CiViewTimeline } from "react-icons/ci";
import { MdConnectWithoutContact, MdOutlineFavorite, MdWorkspacePremium } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const user_email = user?.email;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-green-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Matrimony Dashboard</h1>
                    <nav className="flex space-x-4">
                        <NavLink to="/" className="hover:underline">Home</NavLink>
                        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                        <button onClick={logout} className="hover:underline">Logout</button>
                    </nav>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 bg-green-500">
                    <ul className="menu p-4 space-y-2">
                        {isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard" className="flex items-center space-x-2 hover:text-green-600">
                                        <FaHome /> <span>Admin Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageUser" className="flex items-center space-x-2 hover:text-green-600">
                                        <FaUsers /> <span>Manage Users</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/approvedPremium" className="flex items-center space-x-2 hover:text-green-600">
                                        <MdWorkspacePremium /> <span>Approved Premium</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/approvedContact" className="flex items-center space-x-2 hover:text-green-600">
                                        <MdConnectWithoutContact /> <span>Approved Contact Request</span>
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                
                                <li>
                                    <NavLink to={`/dashboard/addBiodata`} className="flex items-center space-x-2 hover:text-green-600">
                                        <FaPlus /> <span>Add Bio Data</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/bioEdit/${user_email}`} className="flex items-center space-x-2 hover:text-green-600">
                                        <FaEdit /> <span>Bio-Data Update</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/bioView/${user_email}`} className="flex items-center space-x-2 hover:text-green-600">
                                        <CiViewTimeline /> <span>Bio-Data View</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/favBio/${user_email}`} className="flex items-center space-x-2 hover:text-green-600">
                                        <MdOutlineFavorite /> <span>My Favourite Bio</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/reqBio/${user_email}`} className="flex items-center space-x-2 hover:text-green-600">
                                        <MdConnectWithoutContact /> <span>My Request Bio Info</span>
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Main Content */}
                <main className="flex-1 p-8 bg-gray-100">
                    <Outlet />
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-green-600 text-white p-4 text-center">
                <p>© {new Date().getFullYear()} Matrimony. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;

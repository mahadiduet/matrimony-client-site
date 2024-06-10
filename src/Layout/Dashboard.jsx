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
    // console.log(user_email);

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-200">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard">
                                    <FaHome></FaHome>
                                    Admin Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUser">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/approvedPremium">
                                    <MdWorkspacePremium></MdWorkspacePremium>
                                    Approved Premium</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/approvedContact">
                                    <MdConnectWithoutContact></MdConnectWithoutContact>
                                    Approved Contact Request</NavLink>
                            </li>
                            <li>
                                <button onClick={logout}>
                                    <CiLogout></CiLogout>
                                    Logout
                                </button>

                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/addBiodata`}>
                                        <FaPlus></FaPlus>
                                        Add Bio Data</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/bioEdit/${user_email}`}>
                                        <FaEdit></FaEdit>
                                        Bio-Data Update</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/bioView/${user_email}`}>
                                        <CiViewTimeline></CiViewTimeline>
                                        Bio-Data View</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/favBio/${user_email}`}>
                                        <MdOutlineFavorite></MdOutlineFavorite>
                                        My Favourite Bio </NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/dashboard/reqBio/${user_email}`}>
                                        <MdConnectWithoutContact></MdConnectWithoutContact>
                                        My Request Bio Info </NavLink>
                                </li>
                                <li>
                                    <button onClick={logout}>
                                        <CiLogout></CiLogout>
                                        Logout
                                    </button>
                                </li>
                            </>}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard general Content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
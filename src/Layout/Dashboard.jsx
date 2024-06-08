import { useContext } from "react";
import { FaAd, FaBook, FaCalendar, FaEdit, FaEnvelope, FaHome, FaList, FaPlus, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { FaUsersViewfinder } from "react-icons/fa6";
import { CiLogout, CiViewTimeline } from "react-icons/ci";
import { MdConnectWithoutContact, MdOutlineFavorite } from "react-icons/md";

const Dashboard = () => {


    const { user } = useContext(AuthContext);
    const user_email = user?.email;
    // console.log(user_email);

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-green-200">
                <ul className="menu p-4">
                    {/* { */}
                    {/* // isAdmin ? <> */}
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome></FaHome>
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <FaUtensils></FaUtensils>
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                            <FaList></FaList>
                            Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaBook></FaBook>
                            Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaUsers></FaUsers>
                            All Users</NavLink>
                    </li>
                    {/* // </> */}
                    {/* // : */}
                    {/* <> */}
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
                        <NavLink to={`/dashboard/logout`}>
                            <CiLogout></CiLogout>
                            Logout </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history">
                            <FaCalendar></FaCalendar>
                            Not History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <FaList></FaList>
                            Real Payment History</NavLink>
                    </li>
                    {/* </> */}
                    {/* } */}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
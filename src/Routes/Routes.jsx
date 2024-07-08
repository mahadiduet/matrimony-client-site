import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import AddBiodata from "../Pages/Dashboard/Biodata/AddBiodata";
import EditBiodata from "../Pages/Dashboard/Biodata/EditBiodata";
import ViewBioData from "../Pages/Dashboard/Biodata/ViewBioData";
import Biodatalist from "../Pages/BioData/BioDataList/Biodatalist";
import BioDataDetails from "../Pages/BioData/BioDataDetails/BioDataDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FavouriteBio from "../Pages/Dashboard/FavBio/FavouriteBio";
import Payment from "../Pages/Payment/Payment";
import ReqBio from "../Pages/Dashboard/ReqBio/ReqBio";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import ApprovePremium from "../Pages/Dashboard/Admin/Premium/ApprovePremium";
import AdminRoute from "../AdminRoute/AdminRoute";
import ApproveContact from "../Pages/Dashboard/Admin/ApproveContact/ApproveContact";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home />,
                loader:()=>fetch('https://matrimony-server-lilac.vercel.app/bio-data-home')
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/registration',
                element: <Registration />
            },
            {
                path:'/bio-data',
                element: <Biodatalist />,
                loader:()=>fetch('https://matrimony-server-lilac.vercel.app/bio-data')
            },
            {
                path:'/view/:id',
                element: <PrivateRoute><BioDataDetails /></PrivateRoute>,
                loader:({ params }) =>fetch(`https://matrimony-server-lilac.vercel.app/view/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<Payment />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element: <Contact />
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
        children:[
            {
                path:'userHome',
                element:<userHome />
            },
            {
                path:'/dashboard',
                element: <AdminDashboard />
            },
            {
                path:'/dashboard/manageUser',
                element:<AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path:'/dashboard/approvedPremium',
                element: <AdminRoute><ApprovePremium /></AdminRoute>
            },
            {
                path:'/dashboard/approvedContact',
                element:<AdminRoute><ApproveContact /></AdminRoute>
            },
            {
                path:'addBiodata',
                element: <AddBiodata />
            },
            {
                path:'bioEdit/:id',
                element:<EditBiodata />,
                loader: ({ params }) => fetch(`https://matrimony-server-lilac.vercel.app/bio-data/${params.id}`)
            },
            {
                path:'bioView/:id',
                element:<ViewBioData />,
                loader: ({ params }) => fetch(`https://matrimony-server-lilac.vercel.app/bio-data/${params.id}`)
            },
            {
                path:'favBio/:id',
                element:<FavouriteBio />,
                loader: ({ params }) => fetch(`https://matrimony-server-lilac.vercel.app/fav-data/${params.id}`)
            },
            {
                path:'reqBio/:id',
                element:<ReqBio />,
            }
        ]
    }
]);
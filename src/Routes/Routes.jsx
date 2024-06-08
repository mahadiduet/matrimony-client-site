import {
    Outlet,
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import userHome from "../Pages/Dashboard/userHome/userHome";
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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home />,
                loader:()=>fetch('http://localhost:5000/bio-data-home')
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
                loader:()=>fetch('http://localhost:5000/bio-data')
            },
            {
                path:'/view/:id',
                element: <PrivateRoute><BioDataDetails /></PrivateRoute>,
                loader:({ params }) =>fetch(`http://localhost:5000/view/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<Payment />
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
                path:'/dashboard/manageUser',
                element:<ManageUsers />
            },
            {
                path:'addBiodata',
                element: <AddBiodata />
            },
            {
                path:'bioEdit/:id',
                element:<EditBiodata />,
                loader: ({ params }) => fetch(`http://localhost:5000/bio-data/${params.id}`)
            },
            {
                path:'bioView/:id',
                element:<ViewBioData />,
                loader: ({ params }) => fetch(`http://localhost:5000/bio-data/${params.id}`)
            },
            {
                path:'favBio/:id',
                element:<FavouriteBio />,
                loader: ({ params }) => fetch(`http://localhost:5000/fav-data/${params.id}`)
            },
            {
                path:'reqBio/:id',
                element:<ReqBio />,
                // loader: ({ params }) => fetch(`http://localhost:5000/fav-data/${params.id}`)
            }
        ]
    }
]);
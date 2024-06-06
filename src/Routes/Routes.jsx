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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home />
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
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard />,
        children:[
            {
                path:'userHome',
                element:<userHome />
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
            }
        ]
    }
]);
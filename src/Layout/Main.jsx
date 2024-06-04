import { Outlet } from "react-router-dom";
import Header from "../../src/Components/Share/Header";
import Footer from "../Components/Share/Footer";

const Main = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;
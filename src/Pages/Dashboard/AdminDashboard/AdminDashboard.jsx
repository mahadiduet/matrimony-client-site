import { useEffect, useState } from "react";
import { FaFemale, FaHeart, FaMale, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PieChartView from "./PieChartView";

const AdminDashboard = () => {

    const [data, setData] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        const fetachData = async () => {
            const res = await axiosSecure.get('/bio-data')
            // console.log(res.data);
            setData(res.data);
        }
        fetachData();
    }, [])

    const totalBiodates = data.length;
    const totalMaleBiodates = data.filter(item => item.biodata_type === 'Male').length;
    const totalFemaleBiodates = data.filter(item => item.biodata_type === 'Female').length;
    const totalMarriageStory = 6;

    const pieChartData = {totalBiodates, totalMaleBiodates, totalFemaleBiodates, totalMarriageStory}

    // console.log(totalBiodates, totalMaleBiodates, totalFemaleBiodates);
    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center transition duration-500 hover:scale-105">
                        <FaUser className="mx-auto text-4xl mb-2" />
                        <h2 className="text-2xl font-bold mb-2">Total Biodata</h2>
                        <p className="text-4xl">{totalBiodates}</p>
                    </div>
                    <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center transition duration-500 hover:scale-105">
                        <FaMale className="mx-auto text-4xl mb-2" />
                        <h2 className="text-2xl font-bold mb-2">Total Male Biodata</h2>
                        <p className="text-4xl">{totalMaleBiodates}</p>
                    </div>
                    <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg text-center transition duration-500 hover:scale-105">
                        <FaFemale className="mx-auto text-4xl mb-2" />
                        <h2 className="text-2xl font-bold mb-2">Total Female Biodata</h2>
                        <p className="text-4xl">{totalFemaleBiodates}</p>
                    </div>
                    <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-center transition duration-500 hover:scale-105">
                        <FaHeart className="mx-auto text-4xl mb-2" />
                        <h2 className="text-2xl font-bold mb-2">Total Marriage Stories</h2>
                        <p className="text-4xl">{totalMarriageStory}</p>
                    </div>
                </div>
            </div>
            <div>
                <PieChartView pieChartData={pieChartData}></PieChartView>
            </div>
        </div>
    );
};

export default AdminDashboard;
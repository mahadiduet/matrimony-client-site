import { useLoaderData } from "react-router-dom";
import BioCard from "./BioCard/BioCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Biodatalist = () => {
    const bio = useLoaderData();
    const [bioData, setBioData] = useState(bio);
    const [filteredData, setFilteredData] = useState([]);
    // const axiosPublic = useAxiosPublic();
    const handleAcendingOrder = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue === "acending") {
            const sortedBio = [...bioData].sort((a, b) => a.age - b.age);
            setBioData(sortedBio);
        }
        if (newValue === "decending") {
            const sortedBio = [...bioData].sort((a, b) => b.age - a.age);
            setBioData(sortedBio);
        }
    }


    // Filter option
    const [ageRange, setAgeRange] = useState({ min: '', max: '' });
    const [gender, setGender] = useState('');
    const [division, setDivision] = useState('');

    const handleApplyFilters = () => {
        applyFilters({ ageRange, gender, division });
    };

    



    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 bg-gray-200">
                <div className="bg-gray-200 p-4">
                    <h2 className="text-lg font-bold mb-2">Filters</h2>
                    <div className="mb-4">
                        <label className="block mb-1">Age Range</label>
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                            value={ageRange.min}
                            onChange={(e) => setAgeRange({ ...ageRange, min: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-1/2 ml-2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                            value={ageRange.max}
                            onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Gender</label>
                        <select
                            className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Division</label>
                        <select
                            className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                            value={division}
                            onChange={(e) => setDivision(e.target.value)}
                        >
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleApplyFilters}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
            <div className="col-span-3 bg-gray-300">
                <div className="w-full">
                    <select onChange={handleAcendingOrder} className="select select-bordered w-[300px] mb-6">
                        <option selected>Sort</option>
                        <option value="acending">Age - Acending</option>
                        <option value="decending">Age - Decending</option>
                    </select>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        bioData.map(data => <BioCard key={data._id} data={data}></BioCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Biodatalist;
import { useLoaderData } from "react-router-dom";
import BioCard from "./BioCard/BioCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../Components/Share/SectionTitle";

const Biodatalist = () => {
    const bio = useLoaderData();
    console.log(bio);
    const [bioData, setBioData] = useState(bio);
    // const [filteredData, setFilteredData] = useState([]);
    // Filter option
    const [ageRange, setAgeRange] = useState({ min: '', max: '' });
    const [filteredData, setFilteredData] = useState([]);
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [gender, setGender] = useState('');
    const [division, setDivision] = useState('');
    // const [division, setDivision] = useState('');
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


    // const handleApplyFilters = () => {
    //     applyFilters({ ageRange, gender, division });
    // };

    const handleFilter = e => {
        e.preventDefault();
        const from = e.target;
        const min_age = from.min_age.value;
        const max_age = from.max_age.value;
        const gender = from.gender.value;
        console.log(gender);
        const division = from.division.value;
        console.log(min_age, max_age, gender, division);
        setMinAge(min_age);
        setMaxAge(max_age);
        setGender(gender);
        setDivision(division);
    }

    useEffect(() => {
        const filtered = bioData.filter(item => {
          const age = item.age;
          return (
            (minAge === '' || age >= minAge) &&
            (maxAge === '' || age <= maxAge) &&
            (gender === '' || item.biodata_type === gender) &&
            (division === '' || item.permanent_division === division)
          );
        });
        setFilteredData(filtered);
      }, [minAge, maxAge, gender, division, bioData]);


    return (
        <div>
            <SectionTitle title="All Biodata" subtitle="Match your partner"></SectionTitle>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 bg-gray-200">
                    <div className="bg-gray-200 p-4">
                        <h2 className="text-lg font-bold mb-2">Filters</h2>
                        <form onSubmit={handleFilter}>
                            <div className="mb-4">
                                <label className="block mb-1">Age Range</label>
                                <div className="flex">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        name="min_age"
                                        className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                        defaultValue={minAge}
                                        onChange={(e) => setAgeRange(minAge)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        name="max_age"
                                        className="w-1/2 ml-2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                        value={ageRange.max}
                                        onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Gender</label>
                                <select
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                    value={gender}
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Division</label>
                                <select
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                    value={division}
                                    name="division"
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
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Apply Filters
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-span-3 bg-gray-300 p-4">
                    <div className="w-full">
                        <select onChange={handleAcendingOrder} className="select select-bordered w-[300px] mb-6">
                            <option selected>Sort</option>
                            <option value="acending">Age - Acending</option>
                            <option value="decending">Age - Decending</option>
                        </select>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {
                            filteredData.map(data => <BioCard key={data._id} data={data}></BioCard>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Biodatalist;
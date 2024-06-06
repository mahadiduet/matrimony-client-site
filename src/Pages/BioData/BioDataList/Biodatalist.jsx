import { useLoaderData } from "react-router-dom";
import BioCard from "./BioCard/BioCard";
import { useState } from "react";

const Biodatalist = () => {
    const bio = useLoaderData();
    const [bioData, setBioData] = useState(bio);
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

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 bg-gray-200">
                <h1>Filter Option</h1>
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
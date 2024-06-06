import { useLoaderData } from "react-router-dom";
import BioCard from "./BioCard/BioCard";

const Biodatalist = () => {
    const bioData = useLoaderData();
    console.log(bioData);
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 bg-gray-200">
                <h1>Filter Option</h1>
            </div>
            <div className="col-span-3 bg-gray-300">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    bioData.map(data =><BioCard key={data._id} data={data}></BioCard> )
                }
            </div>
            </div>
        </div>

    );
};

export default Biodatalist;
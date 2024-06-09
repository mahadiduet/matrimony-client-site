import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import BioCard from "../BioData/BioDataList/BioCard/BioCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/Share/SectionTitle";
import CounterBio from "./CounterBio";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {

    const bio = useLoaderData();
    const [bioData, setBioData] = useState(bio);
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);


    useEffect(()=>{
        const fetachData = async()=>{
            const res = await axiosPublic.get('/bio-data')
            // console.log(res.data);
            setData(res.data);
        }
        fetachData();
    },[])


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
        <div>
            <Helmet>
                <title>Matrimony</title>
            </Helmet>
            <Slider />
            <SectionTitle title="Latest Bio Data" subtitle="Find a life partner"></SectionTitle>
            <div className="relative mb-20">
                <select onChange={handleAcendingOrder} className="select select-bordered w-[300px] mb-6 absolute right-10">
                    <option selected>Sort</option>
                    <option value="acending">Age - Acending</option>
                    <option value="decending">Age - Decending</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 bg-purple-200">
                {
                    bioData.map(data => <BioCard key={data._id} data={data}></BioCard>)
                }
            </div>
            <CounterBio data={data} />
        </div>
    );
};

export default Home;
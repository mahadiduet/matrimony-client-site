import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BioCard from "../BioDataList/BioCard/BioCard";
import { MdConnectWithoutContact, MdOutlineFavorite } from "react-icons/md";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";

const BioDataDetails = () => {

    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [similar, setSimilar] = useState([]);
    const [premium, setPremium] = useState('');
    const axiosPublic = useAxiosPublic();
    const { _id, biodata_type, BiodataId, name, profile_image, date_of_birth, height,
        weight, age, occupation, race, father_name, mother_name, permanent_division,
        present_division, expected_partner_age, expected_partner_height, expected_partner_weight,
        contact_email, mobile_number } = data[0];
    const params = useParams();
    const userEmail = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get(`/similar-bio/?id=${data[0]._id}&gender=${data[0].biodata_type}`);
                // console.log('Similar Data', response.data);
                setSimilar(response.data);

            } catch (err) {
                // console.log(err);
            }
        };

        const fetchUser = async()=>{
            const checkUser = await axiosPublic.get(`/users/${userEmail}`)
            setPremium(checkUser.data.premiumMember)
            // console.log('Database User:',checkUser.data.premiumMember);
        }

        fetchData();
        fetchUser();
    }, [params.id, user]);

    const handleFavorite = async (e) => {
        e.preventDefault();
        const email = user?.email;
        
        const id = _id;
        const favInfo = {
            email, id, name, profile_image, occupation, permanent_division, BiodataId
        }
        // console.log(favInfo);

        await axiosPublic.post('/favouriteAdd', favInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Favourite Bio-Data added successfully.',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })

    }

    const handleRequestForContact = async (e) => {
        e.preventDefault();
        const email = user?.email;
        const id = _id;

        const cartInfo = {
            email, id, BiodataId, name, profile_image, occupation, permanent_division
        }
    }


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img src={profile_image} alt="Profile Image" className="w-full h-auto rounded-lg mb-4" />

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
                        <p><span className="font-semibold">Name:</span> {name}</p>
                        <p><span className="font-semibold">Date of Birth:</span> {date_of_birth}</p>
                        <p><span className="font-semibold">Age:</span> {age}</p>
                        <p><span className="font-semibold">Occupation:</span> {occupation}</p>
                        <p><span className="font-semibold">Race:</span> {race}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Parental Information</h2>
                        <p><span className="font-semibold">Father's Name:</span> {father_name}</p>
                        <p><span className="font-semibold">Mother's Name:</span> {mother_name}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
                        <p><span className="font-semibold">Height:</span> {height}</p>
                        <p><span className="font-semibold">Weight:</span> {weight}</p>
                        <p><span className="font-semibold">Permanent Division:</span> {permanent_division}</p>
                        <p><span className="font-semibold">Present Division:</span> {present_division}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Partner Preferences</h2>
                        <p><span className="font-semibold">Expected Partner Age:</span> {expected_partner_age}</p>
                        <p><span className="font-semibold">Expected Partner Height:</span> {expected_partner_height}</p>
                        <p><span className="font-semibold">Expected Partner Weight:</span> {expected_partner_weight}</p>
                    </div>
                    {premium === 1 ?
                        <>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                                <p><span className="font-semibold">Email:</span> {contact_email}</p>
                                <p><span className="font-semibold">Mobile Number:</span> {mobile_number}</p>
                            </div>
                        </>
                        :
                        ""
                        }

                    <button onClick={handleFavorite} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-6"> <div className="flex gap-4 items-center"><span>Add to favourite</span> <MdOutlineFavorite></MdOutlineFavorite></div> </button>
                    <Link to={`/checkout/${BiodataId}`}><button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-6"> <div className="flex gap-4 items-center"><span>Request for Contact Info</span> <MdConnectWithoutContact></MdConnectWithoutContact> </div> </button></Link>
                </div>
            </div>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">Similar BioDate</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        similar.map(data => <BioCard key={data._id} data={data}></BioCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BioDataDetails;
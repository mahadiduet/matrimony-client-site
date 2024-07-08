import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BioCard from "../BioDataList/BioCard/BioCard";
import { MdConnectWithoutContact, MdOutlineFavorite } from "react-icons/md";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BioDataDetails = () => {

    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [similar, setSimilar] = useState([]);
    const [premium, setPremium] = useState('');
    const [buy, setBuy] = useState('');
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
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

        const fetchUser = async () => {
            const checkUser = await axiosPublic.get(`/users/${userEmail}`)
            setPremium(checkUser.data.premiumMember)
            // console.log('Database User:',checkUser.data.premiumMember);
        }

        const fetchBuy = async () => {
            const checkBuy = await axiosSecure.get(`/payments/${userEmail}`)
            // console.log('Paydata:',checkBuy.data)
            const checkingData = checkBuy.data;
            // console.log('Bio Id:', BiodataId);
            const exists = checkingData.find(item => item.BiodateID === BiodataId);
            if (exists) {
                setBuy(exists);
            } else{
                setBuy('');
            }
            // console.log('Database User:',checkUser.data.premiumMember);
        }

        fetchData();
        fetchUser();
        fetchBuy();
    }, [params.id, user, _id]);

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
                else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This Biodata already favourite list.',
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
        <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img src={profile_image} alt="Profile" className="w-full h-64 object-cover rounded-lg mb-4" />

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-3">Basic Information</h2>
                        <p><span className="font-bold">Name:</span> {name}</p>
                        <p><span className="font-bold">Date of Birth:</span> {date_of_birth}</p>
                        <p><span className="font-bold">Age:</span> {age}</p>
                        <p><span className="font-bold">Occupation:</span> {occupation}</p>
                        <p><span className="font-bold">Race:</span> {race}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-3">Parental Information</h2>
                        <p><span className="font-bold">Father's Name:</span> {father_name}</p>
                        <p><span className="font-bold">Mother's Name:</span> {mother_name}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-3">Personal Details</h2>
                        <p><span className="font-bold">Height:</span> {height}</p>
                        <p><span className="font-bold">Weight:</span> {weight}</p>
                        <p><span className="font-bold">Permanent Division:</span> {permanent_division}</p>
                        <p><span className="font-bold">Present Division:</span> {present_division}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-3">Partner Preferences</h2>
                        <p><span className="font-bold">Expected Partner Age:</span> {expected_partner_age}</p>
                        <p><span className="font-bold">Expected Partner Height:</span> {expected_partner_height}</p>
                        <p><span className="font-bold">Expected Partner Weight:</span> {expected_partner_weight}</p>
                    </div>

                    {premium === 1 && (
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
                            <p><span className="font-bold">Email:</span> {contact_email}</p>
                            <p><span className="font-bold">Mobile Number:</span> {mobile_number}</p>
                        </div>
                    )}

                    <button onClick={handleFavorite} type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        <div className="flex gap-4 items-center justify-center">
                            <span>Add to Favourite</span>
                            <MdOutlineFavorite />
                        </div>
                    </button>

                    {premium !== 1 && !buy && (
                        <Link to={`/checkout/${BiodataId}`} className="w-full block">
                            <button type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                <div className="flex gap-4 items-center justify-center">
                                    <span>Request for Contact Info</span>
                                    <MdConnectWithoutContact />
                                </div>
                            </button>
                        </Link>
                    )}

                    {buy && (
                        <button type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 btn-disabled">
                            <div className="flex gap-4 items-center justify-center">
                                <span>Already buy this Biodata</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>

            <div className="py-8">
                <h2 className="text-2xl font-bold mb-6">Similar Biodata</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {similar.map(data => <BioCard key={data._id} data={data} />)}
                </div>
            </div>
        </div>
    );
};

export default BioDataDetails;
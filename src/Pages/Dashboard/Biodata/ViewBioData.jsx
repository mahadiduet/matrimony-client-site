import { BsBraces } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhone, FaWeight } from "react-icons/fa";
import { FaLocationPin, FaVoicemail } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdHeight } from "react-icons/md";
import { RiExpandHeightFill, RiParentFill, RiParentLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ViewBioData = () => {
    const bioData = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const { _id, biodata_type, BiodataId, name, profile_image, date_of_birth, height,
        weight, age, occupation, race, father_name, mother_name, permanent_division,
        present_division, expected_partner_age, expected_partner_height, expected_partner_weight,
        contact_email, mobile_number } = bioData[0];

    const premiumInfo = {
        id: _id, biodata_type, BiodataId, name, occupation, contact_email, mobile_number, permanent_division, status: 'pending'
    };

    const handlePremium = () => {
        Swal.fire({
            title: "Are you sure you want to request premium?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.post(`/premium`, premiumInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: `Request sent successfully!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            Swal.fire({
                                icon: "warning",
                                title: `Request already exists, waiting for approve!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6">
            <div className="p-6">
                <div className="flex items-center">
                    <img className="h-24 w-24 rounded-full mr-6" src={profile_image} alt={name} />
                    <div>
                        <div className="text-2xl font-semibold">{name}</div>
                        <div className="text-gray-600">{occupation}</div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-4 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v14a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H7zm1 2h4v12H8V4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Age: {age}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <CiLocationOn className="text-gray-500" />
                        <span className="text-gray-600">Location: {present_division}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <CiMail className="text-gray-500" />
                        <span className="text-gray-600">Email: {contact_email}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <FaPhone className="text-gray-500" />
                        <span className="text-gray-600">Phone: {mobile_number}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <BsBraces className="text-gray-500" />
                        <span className="text-gray-600">Race: {race}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <RiParentFill className="text-gray-500" />
                        <span className="text-gray-600">Father's Name: {father_name}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <RiParentLine className="text-gray-500" />
                        <span className="text-gray-600">Mother's Name: {mother_name}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <MdHeight className="text-gray-500" />
                        <span className="text-gray-600">Height: {height}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <FaWeight className="text-gray-500" />
                        <span className="text-gray-600">Weight: {weight}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <FaLocationPin className="text-gray-500" />
                        <span className="text-gray-600">Permanent Division: {permanent_division}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v14a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H7zm1 2h4v12H8V4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Expected Partner Age: {expected_partner_age}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <RiExpandHeightFill className="text-gray-500" />
                        <span className="text-gray-600">Expected Partner Height: {expected_partner_height}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                        <GiWeightLiftingUp className="text-gray-500" />
                        <span className="text-gray-600">Expected Partner Weight: {expected_partner_weight}</span>
                    </div>
                </div>
                <div className="mt-6">
                    <button onClick={handlePremium} type="button" className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition">
                        Request for Premium Bio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewBioData;

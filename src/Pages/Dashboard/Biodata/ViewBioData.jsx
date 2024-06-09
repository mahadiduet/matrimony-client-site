import { BsBraces } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhone, FaWeight } from "react-icons/fa";
import { FaLocationPin, FaVoicemail } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdHeight } from "react-icons/md";
import { RiExpandHeightFill, RiParentFill, RiParentLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect } from "react";

const ViewBioData = () => {

    const bioData = useLoaderData();
    const axiosPublic = useAxiosPublic()
    const { _id, biodata_type, BiodataId, name, profile_image, date_of_birth, height,
        weight, age, occupation, race, father_name, mother_name, permanent_division,
        present_division, expected_partner_age, expected_partner_height, expected_partner_weight,
        contact_email, mobile_number } = bioData[0];
    // console.log(bioData, biodata_type)
    const premiumInfo = {
        id:_id, biodata_type, BiodataId, name, occupation, contact_email, mobile_number, permanent_division, status:'pending'
    }

    const handlePremium = () => {
        Swal.fire({
            title: "Are you sure request for premium?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.post(`/premium`, premiumInfo)
                    .then(res => {
                        // console.log(res.data.insertedId)
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: `Request send successfully!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        else {
                            Swal.fire({
                                icon: "success",
                                title: `Already exist request!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            }
        });
    }


    return (
        <div className="w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full mr-4" src={profile_image} alt={name} />
                    <div>
                        <div className="text-xl font-semibold">{name}</div>
                        <div className="text-gray-600">{occupation}</div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v14a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H7zm1 2h4v12H8V4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Age: {age}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <CiLocationOn></CiLocationOn>
                        <span className="text-gray-600">Location: {present_division}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <CiMail></CiMail>
                        <span className="text-gray-600">Email: {contact_email}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <FaPhone></FaPhone>
                        <span className="text-gray-600">Phone: {mobile_number}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <BsBraces></BsBraces>
                        <span className="text-gray-600">Race: {race}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <RiParentFill></RiParentFill>
                        <span className="text-gray-600">Father Name: {father_name}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <RiParentLine></RiParentLine>
                        <span className="text-gray-600">Mother Name: {mother_name}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <MdHeight></MdHeight>
                        <span className="text-gray-600">Height: {height}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <FaWeight></FaWeight>
                        <span className="text-gray-600">Weight: {weight}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <FaLocationPin></FaLocationPin>
                        <span className="text-gray-600">Permanent Division: {permanent_division}</span>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a1 1 0 00-1 1v14a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H7zm1 2h4v12H8V4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Expected Partner Age: {expected_partner_age}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <RiExpandHeightFill></RiExpandHeightFill>
                        <span className="text-gray-600">Expected Partner Height: {expected_partner_height}</span>
                    </div>
                    <div className="flex mt-3 gap-4 items-center">
                        <GiWeightLiftingUp></GiWeightLiftingUp>
                        <span className="text-gray-600">Expected Partner Weight: {expected_partner_weight}</span>
                    </div>

                </div>
                <div className="mt-6">
                    <button onClick={handlePremium} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-6"> <div className="flex gap-4 items-center">Request for Premium Bio</div> </button>
                </div>
            </div>
        </div>

    );
};

export default ViewBioData;
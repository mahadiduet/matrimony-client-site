import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BioDataDetails = () => {

    const [viewData, setViewData] = useState([]);
    const firstItem = viewData[0] || {};
    const { _id, biodata_type, name, profile_image, date_of_birth, height,
        weight, age, occupation, race, father_name, mother_name, permanent_division,
        present_division, expected_partner_age, expected_partner_height, expected_partner_weight,
        contact_email, mobile_number } = firstItem;
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`http://localhost:5000/view?id=${params.id}`)
                    .then(res => res.json())
                    .then(data => {
                        setViewData(data);
                        console.log(data);
                    })
            } catch (err) {
                // console.log(err);
            }
        };

        fetchData();
    }, [params.id]);


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

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p><span className="font-semibold">Email:</span> {contact_email}</p>
                        <p><span className="font-semibold">Mobile Number:</span> {mobile_number}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioDataDetails;
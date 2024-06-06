import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const EditBiodata = () => {


    const bioData = useLoaderData();
    const axiosPublic = useAxiosPublic();
    // console.log(bioData);

    const { _id, biodata_type, name, profile_image, date_of_birth, height,
        weight, age, occupation, race, father_name, mother_name, permanent_division,
        present_division, expected_partner_age, expected_partner_height, expected_partner_weight,
        contact_email, mobile_number } = bioData[0];

    const handleEditBiodata = async(event) => {
        event.preventDefault();
        const form = event.target;
        const biodata_type = form.biodata_type.value;
        const name = form.name.value;
        const profile_image = form.profile_image.value;
        const date_of_birth = form.date_of_birth.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const age = form.age.value;
        const occupation = form.occupation.value;
        const race = form.race.value;
        const father_name = form.father_name.value;
        const mother_name = form.mother_name.value;
        const permanent_division = form.permanent_division.value;
        const present_division = form.present_division.value;
        const expected_partner_age = form.expected_partner_age.value;
        const expected_partner_height = form.expected_partner_height.value;
        const expected_partner_weight = form.expected_partner_weight.value;
        const contact_email = form.contact_email.value;
        const mobile_number = form.mobile_number.value;
        const bioInfo = {
            biodata_type, name, profile_image, date_of_birth, height,
            weight, age, occupation, race, father_name, mother_name, permanent_division,
            present_division, expected_partner_age, expected_partner_height, expected_partner_weight,
            contact_email, mobile_number
        }
        // console.log(bioInfo);
        const bioUpdate = await axiosPublic.put(`/bioData/${_id}`, bioInfo);
            console.log(bioUpdate.data)
            if(bioUpdate.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `BioData is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    }

    const [selectedOption, setSelectedOption] = useState(biodata_type);
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    // console.log(_id);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Biodata Form</h2>
            <form onSubmit={handleEditBiodata}>
                <div className="mb-4">
                    <label htmlFor="biodata-type" className="block font-semibold mb-2">
                        Biodata Type
                    </label>
                    <div className="flex items-center">
                        <input type="radio" id="male" name="biodata_type" value="Male" checked={selectedOption === 'Male'} onChange={handleChange} className="mr-2" />
                        <label htmlFor="male" className="mr-4">Male</label>
                        <input type="radio" id="female" name="biodata_type" value="Female" checked={selectedOption === 'Female'} onChange={handleChange} className="mr-2" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" defaultValue={name} className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="profile-image" className="block font-semibold mb-2">Profile Image Link</label>
                    <input type="text" id="profile-image" name="profile_image" defaultValue={profile_image} className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date-of-birth" className="block font-semibold mb-2">Date of Birth</label>
                    <input type="date" id="date-of-birth" name="date_of_birth" defaultValue={date_of_birth} className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="height" className="block font-semibold mb-2">Height</label>
                    <select id="height" name="height" defaultValue={height} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Height</option>
                        <option value="147.32">4′ 10″</option>
                        <option value="149.86">4′ 11″</option>
                        <option value="152.40">5′ </option>
                        <option value="154.94">5′ 1″</option>
                        <option value="157.48">5′ 2″</option>
                        <option value="160.02">5′ 3″</option>
                        <option value="165.10">5′ 4″</option>
                        <option value="167.64">5′ 5″</option>
                        <option value="170.18">5′ 6″</option>
                        <option value="172.72">5′ 7″</option>
                        <option value="175.26">5′ 8″</option>
                        <option value="177.80">5′ 9″</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="weight" className="block font-semibold mb-2">Weight</label>
                    <select id="weight" name="weight" defaultValue={weight} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Weight</option>
                        <option value="46-50">46-50 kg</option>
                        <option value="51-55">51-55 kg</option>
                        <option value="56-60">56-60 kg</option>
                        <option value="61-65">61-65 kg</option>
                        <option value="66-70">66-70 kg</option>
                        <option value="71-75">71-75 kg</option>
                        <option value="76-80">76-80 kg</option>
                        <option value="81-85">81-85 kg</option>
                        <option value="86-90">86-90 kg</option>
                        <option value="91-95">91-95 kg</option>
                        <option value="96-100">96-100 kg</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block font-semibold mb-2">Age</label>
                    <input type="number" id="age" name="age" defaultValue={age} className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="occupation" className="block font-semibold mb-2">Occupation</label>
                    <select id="occupation" name="occupation" defaultValue={occupation} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Occupation</option>
                        <option value="Service holder">Service holder</option>
                        <option value="Business">Business</option>
                        <option value="Student">Student</option>
                        <option value="Farmer">Farmer</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="race" className="block font-semibold mb-2">Race</label>
                    <select id="race" name="race" defaultValue={race} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Race</option>
                        <option value="Islam">Islam</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Kistran">Kistran</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="fathers-name" className="block font-semibold mb-2">Father's Name</label>
                    <input type="text" id="father_name" defaultValue={father_name} name="father_name" className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="mother-name" className="block font-semibold mb-2">Mother's Name</label>
                    <input type="text" id="mother-name" name="mother_name" defaultValue={mother_name} className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="permanent-division" className="block font-semibold mb-2">Permanent Division</label>
                    <select id="permanent-division" name="permanent_division" defaultValue={permanent_division} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Permanent Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet]">Sylhet</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="present-division" className="block font-semibold mb-2">Present Division</label>
                    <select id="present-division" name="present_division" defaultValue={present_division} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Present Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet]">Sylhet</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="expected-partner-age" className="block font-semibold mb-2">Expected Partner Age</label>
                    <input type="number" id="expected-partner-age" defaultValue={expected_partner_age} name="expected_partner_age" className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="expected-partner-height" className="block font-semibold mb-2">Expected Partner Height</label>
                    <select id="expected-partner-height" name="expected_partner_height" defaultValue={expected_partner_height} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Expected Partner Height</option>
                        <option value="147.32">4′ 10″</option>
                        <option value="149.86">4′ 11″</option>
                        <option value="152.40">5′ </option>
                        <option value="154.94">5′ 1″</option>
                        <option value="157.48">5′ 2″</option>
                        <option value="160.02">5′ 3″</option>
                        <option value="165.10">5′ 4″</option>
                        <option value="167.64">5′ 5″</option>
                        <option value="170.18">5′ 6″</option>
                        <option value="172.72">5′ 7″</option>
                        <option value="175.26">5′ 8″</option>
                        <option value="177.80">5′ 9″</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="expected-partner-weight" className="block font-semibold mb-2">Expected Partner Weight</label>
                    <select id="expected-partner-weight" name="expected_partner_weight" defaultValue={expected_partner_weight} className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Expected Partner Weight</option>
                        <option value="46-50">46-50 kg</option>
                        <option value="51-55">51-55 kg</option>
                        <option value="56-60">56-60 kg</option>
                        <option value="61-65">61-65 kg</option>
                        <option value="66-70">66-70 kg</option>
                        <option value="71-75">71-75 kg</option>
                        <option value="76-80">76-80 kg</option>
                        <option value="81-85">81-85 kg</option>
                        <option value="86-90">86-90 kg</option>
                        <option value="91-95">91-95 kg</option>
                        <option value="96-100">96-100 kg</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="contact-email" className="block font-semibold mb-2">Contact Email</label>
                    <input type="email" id="contact-email" name="contact_email" defaultValue={contact_email} className="w-full border rounded-md px-3 py-2" readOnly />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobile-number" className="block font-semibold mb-2">Mobile Number</label>
                    <input type="tel" id="mobile-number" name="mobile_number" defaultValue={mobile_number} className="w-full border rounded-md px-3 py-2" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Update</button>
            </form>
        </div>
    );
};

export default EditBiodata;
import { Link } from "react-router-dom";

const BioCard = ({ data }) => {

    const { _id, name, biodata_type, permanent_division, profile_image, age, occupation, present_division } = data;
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Image and Biodata Number */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <img className="w-20 h-20 object-cover rounded-full" src={profile_image} alt="Profile Image" />
                <div className="text-xl font-bold">Biodata Id: 109</div>
            </div>

            {/* Other Information in Table */}
            <div className="px-6 py-4">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Biodata Type:</td>
                            <td>{biodata_type}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Division:</td>
                            <td>{permanent_division}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Age: {age}</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Occupation: {occupation}</td>
                            <td>Student</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4">
                <Link to={`/view/${_id}`} >  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View Profile
                </button></Link>
            </div>
        </div>
    );
};

export default BioCard;
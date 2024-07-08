import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdContactMail } from "react-icons/md";
import Swal from "sweetalert2";

const ApprovePremium = () => {
    const axiosSecure = useAxiosSecure();
    const { data: premiums = [], refetch } = useQuery({
        queryKey: ['premiums'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premium');
            return res.data;
        }
    });

    const handleApprove = async(premium) => {
        await axiosSecure.patch(`/premium/${premium.id}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `Approved successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">All Premium Request</h2>
                <h2 className="text-3xl font-bold text-gray-800">Total Request: {premiums.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="py-3 px-4 border-b">#</th>
                            <th className="py-3 px-4 border-b">Name</th>
                            <th className="py-3 px-4 border-b">Biodata Id</th>
                            <th className="py-3 px-4 border-b">Biodata Type</th>
                            <th className="py-3 px-4 border-b">Email</th>
                            <th className="py-3 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {premiums.map((premium, index) => (
                            <tr key={premium._id} className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                                <td className="py-3 px-4 border-b">{premium.name}</td>
                                <td className="py-3 px-4 border-b">{premium.BiodataId}</td>
                                <td className="py-3 px-4 border-b">{premium.biodata_type}</td>
                                <td className="py-3 px-4 border-b">{premium.contact_email}</td>
                                <td className="py-3 px-4 border-b text-center">
                                    {premium.status === 'approve' ? (
                                        <span className="text-green-600 font-semibold">Approved</span>
                                    ) : (
                                        <button
                                            onClick={() => handleApprove(premium)}
                                            className="btn btn-md bg-blue-500 text-white hover:bg-blue-700 transition duration-200"
                                        >
                                            <MdContactMail className="text-xl" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovePremium;

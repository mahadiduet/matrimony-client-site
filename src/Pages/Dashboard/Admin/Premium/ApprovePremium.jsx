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
    })

    // console.log(premiums);

    const handleApprove = async(premium) => {
        await axiosSecure.patch(`/premium/${premium.id}`)
            .then(res => {
                console.log(res.data)
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
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Premium Request</h2>
                <h2 className="text-3xl">Total Request: {premiums.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>Biodata Id</td>
                            <td>Biodata Type</td>
                            <td>Email</td>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            premiums.map((premium, index) => <tr key={premium._id}>
                                <th>{index + 1}</th>
                                <td>{premium.name}</td>
                                <td>{premium.BiodataId}</td>
                                <td>{premium.biodata_type}</td>
                                <td>{premium.contact_email}</td>
                                <td>
                                    {premium.status === 'approve' ? 'Approved' : <button
                                        onClick={() => handleApprove(premium)}
                                        className="btn btn-md bg-blue-300">
                                        <MdContactMail className="text-white 
                                        text-2xl"></MdContactMail>
                                    </button>}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovePremium;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdContactMail } from "react-icons/md";
import Swal from "sweetalert2";

const ApproveContact = () => {

    const axiosSecure = useAxiosSecure();
    const { data: contacts = [], refetch } = useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data;
        }
    })

    // console.log(contacts);
    const handleApprove = (contact) => {
        axiosSecure.patch(`/payments/${contact.BiodateID}`)
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
                <h2 className="text-3xl">All Contact Request</h2>
                <h2 className="text-3xl">Total Request: {contacts.length}</h2>
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
                            <td>Transaction Id</td>
                            <td>Amount</td>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, index) => <tr key={contact._id}>
                                <th>{index + 1}</th>
                                <td>{contact.name}</td>
                                <td>{contact.BiodataId}</td>
                                <td>{contact.biodata_type}</td>
                                <td>{contact.email}</td>
                                <td>{contact.transactionId}</td>
                                <td>${contact.price}</td>
                                <td>
                                    {contact.status === 'approve' ? 'Approved' : <button
                                        onClick={() => handleApprove(contact)}
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

export default ApproveContact;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaDiamond, FaUser } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `Admin added successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakePremium = user => {
        axiosSecure.patch(`/users/admin/premium/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `Premium member successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">All Users</h2>
                <h2 className="text-3xl font-bold text-gray-800">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="py-3 px-4 border-b">#</th>
                            <th className="py-3 px-4 border-b">Name</th>
                            <th className="py-3 px-4 border-b">Email</th>
                            <th className="py-3 px-4 border-b">Premium Member</th>
                            <th className="py-3 px-4 border-b">Role</th>
                            <th className="py-3 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b text-center">{index + 1}</td>
                                <td className="py-3 px-4 border-b">{user.name}</td>
                                <td className="py-3 px-4 border-b">{user.email}</td>
                                <td className="py-3 px-4 border-b text-center">
                                    {user?.premiumMember === 1 ? (
                                        <span className="text-green-600 font-semibold">Premium</span>
                                    ) : (
                                        <button
                                            onClick={() => handleMakePremium(user)}
                                            className="btn btn-md bg-blue-500 text-white hover:bg-blue-700 transition duration-200"
                                        >
                                            <FaDiamond className="text-xl" />
                                        </button>
                                    )}
                                </td>
                                <td className="py-3 px-4 border-b text-center">
                                    {user.role === 'admin' ? (
                                        <span className="text-blue-600 font-semibold">Admin</span>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-md bg-blue-500 text-white hover:bg-blue-700 transition duration-200"
                                        >
                                            <FaUser className="text-xl" />
                                        </button>
                                    )}
                                </td>
                                <td className="py-3 px-4 border-b text-center">
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg hover:text-red-700 transition duration-200"
                                    >
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;

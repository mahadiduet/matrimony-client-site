import { FaTrash } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const FavouriteBio = () => {
    const favData = useLoaderData();
    // console.log(favData);

    const handleDelete = async (data) => {

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
                fetch(`http://localhost:5000/fav-delete/${data._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        console.log(data);
                    })

            }
        });
        // e.preventDefault();
        // console.log(data._id);
        console.log(data);

    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Permanent Division</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        favData.map((data, index) => <tr key={data._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.profile_image} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">{data.name}</div>
                                    <div className="text-sm opacity-50">{data.occupation}</div>
                                </div>
                            </td>
                            <td>
                                {data.permanent_division}
                            </td>

                            <th>
                                <button onClick={() => handleDelete(data)} className="btn btn-secondary btn-md"><FaTrash /></button>
                            </th>
                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default FavouriteBio;
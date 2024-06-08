import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const FavouriteBio = () => {
    const initialData = useLoaderData();
    const [favData, setFavData] = useState(initialData);
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
                            setFavData(prevData => prevData.filter(item => item._id !== data._id));
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
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Name</th>
                        <th>BioDate Id</th>
                        <th>Permanent Address</th>
                        <th>Occupation</th>
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
                                {data.name}
                            </td>
                            <td>
                                {data.BiodataId}
                            </td>
                            <td>
                                {data.permanent_division}
                            </td>
                            <td>
                                {data.occupation}
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
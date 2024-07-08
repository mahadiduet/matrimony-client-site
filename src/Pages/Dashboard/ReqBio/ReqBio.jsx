import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ReqBio = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })

    console.log("Payments History",payments);

    return (
        <div>
            {payments ?
                <>
                    <div>
                        <h2 className="text3-xl">Total Payments: {payments.length}</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>BioDateId</th>
                                        <th>Status</th>
                                        <th>Mobile Number</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments.map((payment, index) => <tr key={payment._id}>
                                        <th>{index + 1}</th>
                                        <th>{payment.name}</th>
                                        <th>{payment.BiodateID}</th>
                                        <td>{payment.status}</td>
                                        <td>{payment.status !== "pending" ? payment.mobile_number : ""}</td>
                                        <td>{payment.status !== "pending" ? payment.contact_email : ""}</td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
                :
                <div>
                    <h1>There is no available data</h1>
                </div>
            }
        </div>

    );
};

export default ReqBio;
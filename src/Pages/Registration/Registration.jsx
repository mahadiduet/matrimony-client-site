import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Registration = ({ children }) => {

    const axiosPublic = useAxiosPublic();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUserRegistration = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photoUrl.value;
        const password = from.password.value;
        // if (password.length < 6) {
        //     { toast.warning('Please give me minimum 6 character!') }
        //     return;
        // }
        // if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
        //     { toast.warning('You have must be provide password with uppercase or Lowercase!') }
        //     return;
        // }
        createUser(email, password)
            .then(result => {
                updateUser(name, photoUrl)
                    .then((updateUser) => {
                        // create user added to the database
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Registration successfully.',
                                        showConfirmButton: false,
                                        timer: 1000
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-x-12 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Registration</h1>
                    <img className="w-96 rounded-3xl" src="https://i.ibb.co/br61VfX/images-1.jpg" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUserRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="URL" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div>
                        <p className="mt-1 mb-4 text-xs font-light text-center text-gray-700">
                            {" "}
                            Already have an account?{" "}
                            <Link className="font-medium text-indigo-600 hover:underline" to='/login'> Login</Link>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
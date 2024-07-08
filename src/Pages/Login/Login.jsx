import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // console.log('error code:', error.code);
                // console.log('Error massage:', error.message);
                setError(error.code);
            });
    }

    const handleGoogleLogin = () => {
        // console.log('Google login');
        googleSignIn()
            .then((result) => {
                // console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "user"
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-x-12 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Login now</h1>
                    <img className="w-96 rounded-3xl" src="https://i.ibb.co/DVZcJ55/images.jpg" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {error ?
                            <>
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Error: </strong>
                                    <span className="block sm:inline">User and password not match.</span>
                                </div>
                            </>
                            :
                            ""
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div className="text-center ml-10">
                        <button onClick={handleGoogleLogin} className="flex gap-4 items-center"><FaGoogle /> Login with Google</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className="mt-1 mb-4 text-xs font-light text-center text-gray-700">
                            {" "}
                            Already have an account?{" "}
                            <Link className="font-medium text-indigo-600 hover:underline" to='/registration'> SignUp</Link>

                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;
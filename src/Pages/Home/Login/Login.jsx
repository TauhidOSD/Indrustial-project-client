
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";
import { GithubAuthProvider } from "firebase/auth/cordova";

const Login = () => {
    
    const { login, googleLogin, setUser,GitHubLogin, } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const provider = new GoogleAuthProvider();
    const GitHubProvider =new GithubAuthProvider();
    // login with email & pass
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        // console.log(event);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((result) => {
                // eslint-disable-next-line no-unused-vars
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from)
                form.reset();
                Swal.fire({
                    title: 'success!',
                    text: 'Login Succesfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch((error) => {
                // console.log(error.message);
                setError(error.message);
            });
    };

    // login with google
    const handleGoogleLogin = () => {
        setError("");
        setSuccess("");

        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                navigate(from)
                setUser(user);
                // console.log(user);
                Swal.fire({
                    title: 'success!',
                    text: 'Login Succesfull',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    //github login
    const handleGitHubLogin = () => {
      setError("");
      setSuccess("");

      GitHubLogin(GitHubProvider)
          .then((result) => {
              const user = result.user;
              navigate(from)
              setUser(user);
              // console.log(user);
              Swal.fire({
                  title: 'success!',
                  text: 'Login Succesfull',
                  icon: 'success',
                  confirmButtonText: 'OK'
              })
          })
          .catch((error) => {
              setError(error.message);
          });
  };

    return (
        <div className="mt-10 mb-10">
            <div className="hero-content">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="p-10">
                        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <p className="mt-2" onClick={() => setShow(!show)}>
                                <span className=" font-bold ">
                                    {show ? <span>Hide Password</span> : <span>Show Password</span>}
                                </span>
                            </p>
                            <p className="text-green-700">
                                {success}
                            </p>
                            <br />
                            <p className="text-red-700 ">
                                {error}
                            </p>
                            <div className="form-control mt-2">

                                <input className="btn btn-outline text-orange-400" type="submit" value="Log in" />
                            </div>
                        </form>


                        <p className="mt-2 mb-2" > <span className="font-semibold"> Did not have an Account?</span>  <Link className="text-orange-400 font-bold" to="/register">Register</Link></p>
                    <div className="text-center">
                        <span className="text-gray-400">or</span>
                    </div>
                    <div className=" mx-auto mt-2">
                        <div className="  ">
                        <button
                            onClick={handleGoogleLogin}
                            className=" px-6  py-3 btn btn-outline text-orange-400 rounded-md mb-4"
                        >
                            <FaGoogle className=" text-2xl mr-5 "  /> Sign in with Google
                        </button>
                        <button
                            onClick={handleGitHubLogin}
                            className=" px-6  py-3 btn btn-outline text-orange-400 rounded-md btn-error"
                        >
                            Sign in with GitHub
                        </button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;





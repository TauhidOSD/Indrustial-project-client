import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(photo);

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
    ) {
      toast.error(
        "Password must be at least 6 characters, contain a capital letter, and have a special character"
      );
    } else {
      createUser(email, password)
        .then((result) => {
          // eslint-disable-next-line no-unused-vars
          const loggedUser = result.user;
          // console.log(loggedUser);

          updateUserData(result.user, name, photo);
          navigate(from, { replace: true });
          form.reset();
          Swal.fire({
            title: "success!",
            text: "Registration Succesfull",
            icon: "success",
            confirmButtonText: "OK",
          });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className="mt-10 mb-10">
      <Helmet>
        <title>Indrusto || Register</title>
      </Helmet>
      <div className="hero-content">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Register</h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-outline text-orange-400"
                  type="submit"
                  value="Register"
                />
              </div>
              <br />
              <p className="text-green-600">{success}</p>
              <br />
              <p className="text-red-700">{error}</p>
            </form>
            <p>
              {" "}
              <span className="font-semibold">
                {" "}
                Alredy have an Account?
              </span>{" "}
              <Link className="text-orange-400 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import UseAuth from "../../../Hooks/UseAuth";

// const Register = () => {
//   const { createUser } = UseAuth();

//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     const { Email, password } = data;
//     createUser(Email, password).then((result) => {
//       console.log(result);
//     });
//   };

//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Register now!</h1>
//           <p className="py-6">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//         </div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
//         >
//           <div className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="name"
//                 placeholder="name"
//                 className="input input-bordered"
//                 required
//                 {...register("fullName", { required: true })}
//               />
//               {errors.fullName && (
//                 <span className="text-red-500">This field is required</span>
//               )}
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 required
//                 {...register("Email", { required: true })}
//               />
//               {errors.Email && (
//                 <span className="text-red-500">This field is required</span>
//               )}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Img Url</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="img url"
//                 className="input input-bordered"
//                 required
//                 {...register("ImgUrl")}
//               />
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered"
//                 required
//                 {...register("password", { required: true })}
//               />
//               {errors.password && (
//                 <span className="text-red-500">This field is required</span>
//               )}
//               <div className="flex justify-between">
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//                 <label className="label ">
//                   <Link
//                     to={"/Login"}
//                     href="#"
//                     className="label-text-alt link link-hover text-green-700 font-semibold"
//                   >
//                     Login...
//                   </Link>
//                 </label>
//               </div>
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Register</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

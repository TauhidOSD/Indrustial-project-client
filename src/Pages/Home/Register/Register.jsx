import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const Register = () => {
  const { createUser } = UseAuth();

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email, password } = data;
    createUser(Email, password).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                required
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("Email", { required: true })}
              />
              {errors.Email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Img Url</span>
              </label>
              <input
                type="text"
                placeholder="img url"
                className="input input-bordered"
                required
                {...register("ImgUrl")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <div className="flex justify-between">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label ">
                  <Link
                    to={"/Login"}
                    href="#"
                    className="label-text-alt link link-hover text-green-700 font-semibold"
                  >
                   Login...
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import { useContext } from "react";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  // console.log(user)
  return (
    
    <div className="flex justify-center mt-8 h-screen">
      <Helmet>
        <title>Indeusto || user profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-3/5 h-[75%] ">
        <img
          alt="profile"
          src="https://i.postimg.cc/JnDqSG36/360-F-438556946-UKup-Zv-Zr-Czbf-Ixawj8-P57ho-DSl7ypza9.jpg "
          className="w-full mb-4 rounded-t-lg h-36 md:h-52 "
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col mt-3">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col mt-3 mb-3">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <Link to="/updateProfile"> 
                  <button className="btn btn-block btn-outline   mt-3 mb-3">
                    Update Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

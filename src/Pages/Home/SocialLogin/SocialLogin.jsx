import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const SocialLogin = () => {
  const { googleLogin, GitHubLogin } = UseAuth();
  
  const navigate =useNavigate()
  const location =useLocation()
  const from =location?.pathname || '/';
  
  const handleSocialLogin = socialProvider =>{
    socialProvider() 
    .then(result=>{
      if(result.user){

        navigate(from);
        console.log(from);
      }
    })
  }

  return (
    <div className="flex justify-around">
      <div>
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary bg-pink-500"
        >
          google Login
        </button>
      </div>
      <div>
        <button
          onClick={() => handleSocialLogin(GitHubLogin)}
          className="btn btn-primary bg-pink-500"
        >
          gitHub Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

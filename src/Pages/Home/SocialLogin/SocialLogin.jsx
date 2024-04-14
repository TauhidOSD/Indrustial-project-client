import UseAuth from "../../../Hooks/UseAuth";

const SocialLogin = () => {

    const {googleLogin,GitHubLogin} =UseAuth();
    return (
       <div className="flex justify-around">
         <div>
            <button onClick={()=>googleLogin()} className="btn btn-primary bg-pink-500" >google Login</button>
        </div>
        <div>
            <button onClick={()=>GitHubLogin()} className="btn btn-primary bg-pink-500" >gitHub Login</button>
        </div>
       </div>
    );
};

export default SocialLogin;
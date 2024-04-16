import { Helmet } from "react-helmet-async";


const User = () => {
    return (
        <div>
            <Helmet>
                <title>User profile</title>
            </Helmet>
           <h2 className="text-3xl">This is User page</h2> 
        </div>
    );
};

export default User;
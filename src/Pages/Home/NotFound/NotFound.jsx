import { Helmet } from "react-helmet-async";


const NotFound = () => {
    return (
        <div className="text-center">
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <h1 className="text-[400px] font-bold">
                404
            </h1>
            <h1 className="text-5xl font-bold">
                NOT FOUND
            </h1>
        </div>
    );
};

export default NotFound;
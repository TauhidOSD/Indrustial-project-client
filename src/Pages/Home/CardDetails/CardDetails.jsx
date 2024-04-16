import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  const details = useLoaderData();

  useEffect(() => {
    const findCart = details?.find((item) => item.id === id);

    setData(findCart);
  }, [id, details]);

  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div>
        <div className="w-full mb-10">
          <div className=" lg:w-[60%] md:w-full mx-auto  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src={data?.image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {data?.text}
                </h2>
                <p className="dark:text-gray-800">{data?.details}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Area : {data?.Area}</h2>
                <h2 className="text-xl font-semibold">
                  Status : {data?.Status}
                </h2>
                <div>
                  <h2 className="text-xl">Facilities:</h2>
                </div>
                <ul>
                  <li>Assembly lines</li>
                  <li>Quality Control labs</li>
                  <li>Employee facilities</li>
                </ul>
                <h2 className="text-xl font-semibold">Price : {data?.Price}</h2>
              </div>

              <button
                type="button"
                className="text-3xl bg-pink-500 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                fdprocessedid="led2je"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="text-center mt-4">
          <button className="btn btn-outline btn-error">Home</button>
        </div>
      </Link>
    </div>
  );
};

export default CardDetails;

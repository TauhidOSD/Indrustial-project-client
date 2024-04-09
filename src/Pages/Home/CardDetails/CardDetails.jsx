import { useEffect, useState } from "react";
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
      <div>
        <div className="w-full mb-10">
          <div className=" w-[60%] mx-auto  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src="https://source.unsplash.com/random/300x300/?2"
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

              <button
                type="button"
                className="bg-pink-500 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                fdprocessedid="led2je"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/"><div className="text-center mt-4"><button className="btn btn-outline btn-error">Home</button></div></Link>
      
    </div>
  );
};

export default CardDetails;

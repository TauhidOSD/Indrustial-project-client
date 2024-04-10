import { useEffect, useState } from "react";

import Blog from "./Blog";
import { Link } from "react-router-dom";

const Card = () => {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(Cards);
  
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
      {Cards.map((Card) => (
        // <Blog key={Card.id} Card={Card}></Blog>
		<div key={Card.id} className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
          <img
            src={Card?.image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {Card?.text}
              </h2>
              <p className="dark:text-gray-800">
                {Card?.details.slice(0,75) }
              </p>
            </div>
            <div className="flex justify-between">
            <div><h2 className="text-xl font-semibold">Price : {Card?.Price}</h2></div>
            <div><h2 className="text-xl font-semibold">Area : {Card?.Area}</h2></div>
            </div>

            <Link to={`/${Card?.id}`}>
            <button 
              type="button"
              className="bg-pink-500 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              fdprocessedid="led2je"
            >
              Read more
            </button>
            </Link>
           
          </div>
        </div>
		
      ))}
    </div>
  );
};

export default Card;

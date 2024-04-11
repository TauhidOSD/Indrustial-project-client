import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(Cards);
  return (
    <div className="flex justify-center Lg:px-12 mb-4 md:px-2">
      <button class="btn btn-active btn-secondary lg:text-xl md:text-sm ">
        Engineers:
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {Cards.map((Card) => (
          <div key={Card?.id}>
            <div className="flex justify-center items-center gap-4 font-semibold" >
              <div><h2 className="text-xl">{Card?.position}</h2></div>
            <div className="items-center justify-center">
              <img
                className="rounded-full w-[30%]  items-center justify-center gap-x-36"
                src={Card?.Member}
                alt=""
              />

              <h2 className="text-xl">{Card?.name} </h2>
            </div>
            </div>
            

          </div>
          
        ))}

        {/* <h2 className="text-xl">I am a Senion indrustial Officer.</h2>

        <div>
          <img
            className="rounded-full w-[30%] "
            src="https://i.postimg.cc/GhbScPyJ/image.jpg"
            alt=""
          />
          <h2 className="text-xl">Mr.Json Roy</h2>
        </div>
        <img
          className="rounded-full w-[30%] "
          src="https://i.postimg.cc/YqmjCgB0/image.jpg"
          alt=""
        />
        <h2 className="text-xl">I am Chep managing Officer</h2>

        <img
          className="rounded-full w-[30%] "
          src="https://i.postimg.cc/VN4XWM61/image.jpg"
          alt=""
        />
        <img
          className="rounded-full w-[30%] "
          src="https://i.postimg.cc/Y2XGDMMN/image.jpg"
          alt=""
        />
        <img
          className="rounded-full w-[40%] "
          src="https://i.postimg.cc/wBfY8fvr/image.jpg"
          alt=""
        /> */}
      </Marquee>
    </div>
  );
};

export default Slider;

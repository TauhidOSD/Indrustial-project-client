const Banner = () => {
  return (
    <div>
      <img
        className="w-full lg:h-[550px] md:h-[350px] rounded-2xl "
        src="https://i.postimg.cc/vmgc8Txb/pexels-photo-247763-jpeg-cs-srgb-dl-pexels-pixabay-247763.jpg"
        alt=""
      />
      <div className=" md:my-4 mb-4 p-3 ">
        <h1 className="lg:text-5xl font-bold lg:mt-8  text-center md:mt-4 text-3xl">Our products</h1>
        <h1 className="lg:text-2xl md:xl lg:p-10 md:p-4 ">
          "Five stars for the TitanX-5000! As a seasoned industrial engineer,
          I've seen my fair share of compressors, but nothing comes close to the
          efficiency and reliability of this powerhouse. Its modular design
          makes maintenance a breeze, and the performance is unmatched. Whether
          in heavy-duty manufacturing or precision engineering, the TitanX-5000
          stands tall as the ultimate industrial companion. Highly recommend!"
        </h1>
      </div>
    </div>
  );
};

export default Banner;

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import "./NewSlider.css"
const NewSlider = () => {
    return (
        <div>
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay,Pagination]} pagination={{clickable:true}} autoplay={{delay:2000}} className="mySwiper">
        <SwiperSlide>
        <div className="slide slide1 rounded-2xl">
      
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide2 rounded-2xl">
        
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide3 rounded-2xl">
        
      </div>
        </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default NewSlider;
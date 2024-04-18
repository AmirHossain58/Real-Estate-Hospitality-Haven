import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Banner = () => {
    return (
     <div className="">
        <div className="my-5 text-center mx-auto">
    <h1 className="text-2xl md:text-4xl font-bold ">Welcome to ours <br />Hospitality<span className="text-red-500">Haven</span> </h1>
    <p className=" md:w-full lg:w-full text-center">Experience Hospitality Like Never Before: Hospitality Haven Awaits Your Arrival</p>
  </div>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Parallax,Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       <SwiperSlide>
        <div className='w-full'>
        <img className="w-full overflow-hidden " src="https://i.ibb.co/s1CLVqd/beautiful-outdoor-view-with-umbrella.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-full'>
      <img src="https://i.ibb.co/qxTbbQ1/1673-1.jpg" className="w-full" />
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
        <img src="https://i.ibb.co/NyHBZjM/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className="w-full" />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
      <img src="https://i.ibb.co/DrkC25B/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" ></img>
        </div>
        </SwiperSlide>
    </Swiper>
     </div>
 
    );
};

export default Banner;
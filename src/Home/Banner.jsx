

const Banner = () => {
    return (
     <div className="relative ">

<div className="carousel w-full overflow-hidden lg:max-h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img className="w-full overflow-hidden " src="https://i.ibb.co/s1CLVqd/beautiful-outdoor-view-with-umbrella.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qxTbbQ1/1673-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/NyHBZjM/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/DrkC25B/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  <div className="absolute left-[20%] md:left-[25%] top-[30%]  text-white text-center mx-auto">
    <h1 className="text-2xl md:text-5xl font-bold ">Welcome to ours <br />Hospitality<span className="text-red-500">Haven</span> </h1>
    <p className="w-52 md:w-full lg:w-full text-center">Experience Hospitality Like Never Before: Hospitality Haven Awaits Your Arrival</p>
  </div>
     </div>
 
    );
};

export default Banner;
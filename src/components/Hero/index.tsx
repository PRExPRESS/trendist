import { Carousel } from "@material-tailwind/react";


import Slide1 from '../../assets/images/slider/slide1.jpg';
import Slide2 from '../../assets/images/slider/slide2.jpg';
import Slide3 from '../../assets/images/slider/slide3.jpg';

const Hero = () => {
  return (
    <div className="w-full h-full">
      <Carousel  
        transition={{ duration: 2 }} 
        autoplay 
        interval={2000} 
        className="relative" 
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-line" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
      {...({
      }as any)}
      >
      <div className="relative w-full h-">
        <img
          src={Slide1}
          alt="image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-10 transform ">
        <h1 className=" text-lg md:text-[80px] font-albert  font-normal md:leading-tight ">Gentle<br />Summer style</h1>
        <p className="text-sm md:text-[20px] font-albert md:w-1/2 text-wrap font-normal mt-6">Discover the hottest trends and must-have looks</p>
        </div>
      </div>
      <div className="relative w-full h-">
        <img
          src={Slide2}
          alt="image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-10 transform ">
        <h1 className=" text-lg md:text-[80px] font-albert  font-normal md:leading-tight ">Gentle<br />Summer style</h1>
        <p className="text-sm md:text-[20px] font-albert md:w-1/2 text-wrap font-normal ">Discover the hottest trends and must-have looks</p>
        </div>
      </div>
      <div className="relative w-full h-">
        <img
          src={Slide3}
          alt="image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-10 transform ">
        <h1 className=" text-lg md:text-[80px] font-albert  font-normal md:leading-tight ">Gentle<br />Summer style</h1>
        <p className="text-sm md:text-[20px] font-albert md:w-1/2 text-wrap font-normal ">Discover the hottest trends and must-have looks</p>
        </div>
      </div>
    </Carousel>
    </div>
  )
}

export default Hero

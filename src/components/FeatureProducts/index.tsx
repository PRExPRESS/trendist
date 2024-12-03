
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from '../ProdcutCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import products from '../../../Data/Prodcut';

const FeatureProducts = () => {
    
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Swiper
        slidesPerView={1} 
        spaceBetween={10} 
        navigation 
        pagination={{ clickable: true }} 
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 4, 
          },
        }}
        modules={[Navigation, Pagination]} 
        className="mySwiper"
      >
        {
          products.map((item, index) => {
            if(index > 5) return
            return (
              <SwiperSlide key={index}>
                <div>
                  <ProductCard product={item} />
                </div>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </div>
  )
}

export default FeatureProducts

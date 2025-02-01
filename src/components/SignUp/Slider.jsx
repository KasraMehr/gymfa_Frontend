import { Swiper, SwiperSlide } from 'swiper/react';
import signup1 from '../../assets/signup1.png'
import '../SignUp/SignUp.css'
import login1 from "../../assets/login1.png";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={signup1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={login1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={signup1} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider
import 'bulma/css/bulma.css';
import '../index.scss';
import { Whether } from './Whether';
import StarWars from './StarWars';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export function Main() {
  return (
    <div>
      <div className='main-contets'>
        <div className='main-contet'>
          <div className='main-contets-texts'>
            <div className='main-contets-text'>
              <h2>5555</h2>
              <p>Helping people make the world a better place through quality software.</p>
            </div>
          </div>
          <div className='main-contets-whether'>
            <Whether/>
          </div>
        </div>
           {/* 出てこないから直接スライダー入れてみた */}
       <div >
       <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          type: "fraction",
        }}
      >
        {data.map((d) => (
          <SwiperSlide>
            <div style={{ background: "grey", height: "300px" }}>{d}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </div>
      <div className='main-sub-contents'>
          <h3>今日の<br/>スターウォーズ豆知識</h3>
          <div className='main-sub-contents-starwars'>
            <StarWars />
          </div>
      </div>
    </div>
  )}
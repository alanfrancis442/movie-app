"use client";
import React, { useRef, useState,useEffect } from 'react';
import {Get_movies,get_trendign_movies} from '@/app/api_call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.module.css';

interface Movie {
    Poster: string;
}
//https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg

function LandingSlider() {
    const [movies, setmovies] = useState([])

    const get_ternding = async () => {
      let movies_list = await get_trendign_movies();
      console.log('slide',movies_list.slice(0,5));
      console.log('slide',movies_list.slice(0,5)[0].backdrop_path);
      setmovies(movies_list.slice(0,5));
  }

    useEffect(() => {
        get_ternding();
    }, [])

    const image_url = 'https://image.tmdb.org/t/p/original'

    return ( 
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[85vh] w-full"
      >
          {
             movies.map((e,i)=>{
              return (
                <SwiperSlide key={i} className='relative'>
                  <img
                  className='w-full h-full object-cover object-center'
                  src={`${image_url}/${e.backdrop_path}`} alt='1' />
                  <div className='text-white absolute z-10 bottom-0 h-[45vh] w-full
         bg-gradient-to-t from-[rgba(10,10,10,0.7)] from-50% top-[rgba(0,0,0,0.1)]'>
              <div className='text-white pl-10 flex flex-col gap-5 w-3/5 items-baseline text-6xl font-semibold absolute bottom-10 left-10'>
                  <p className=''>{e.original_title}</p>
                  <p className='text-base font-normal'>{e.overview}</p>
              </div>
         </div>
                </SwiperSlide>
              )
            
            })
          }
          {/* {
            Array(5).fill(0).map((e,i)=>{
              return (
                <SwiperSlide key={i} className='bg-blue-200'>
                  <img 
                  className='w-full h-full object-cover object-center'
                  src={`https://image.tmdb.org/t/p/original/qjoX7hl721FOiyeHsDkeQ6rFVLl.jpg`} alt='1' />
                  <p>hi</p>
                </SwiperSlide>
              )
            
            })
          } */}
      </Swiper>
        </>
     );
}

export default LandingSlider;
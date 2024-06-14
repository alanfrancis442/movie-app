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
      // console.log('slide',movies_list.slice(0,5)[0].backdrop_path);
      setmovies(movies_list.slice(0,5));
  }

    useEffect(() => {
        // get_ternding();
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
        className="mySwiper bg-red-500 h-[80vh] w-full"
      >
          {/* {
             movies.map((e,i)=>{
              console.log(e.backdrop_path);
              return (
                <SwiperSlide key={i} className='py-16 bg-blue-200'>
                  <img
                  className='w-full h-full object-cover object-center'
                  src={`${image_url}/${e.backdrop_path}`} alt='1' />
                </SwiperSlide>
              )
            
            })
          } */}
          {
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
          }
      </Swiper>
        </>
     );
}

export default LandingSlider;
"use client";
import React, { useRef, useState,useEffect } from 'react';
import Get_movies from '@/app/api_call';
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
    const [movies, setmovies] = useState<Movie[]>([])

    const get_movie_list = async () => {
        let movies_list = await Get_movies("anime");
        // setmovies(movies_list);
        console.log(movies_list);
    
    }

    useEffect(() => {
        get_movie_list();
    }, [])


    return ( 
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-red-500 h-screen w-full"
      >
        <SwiperSlide className=''>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        {
          movies.length>0 && (
            <SwiperSlide className='flex justify-center items-center h-full w-full'>
                {/* <img src={movies[0].Poster} alt='1' className='' /> */}
            </SwiperSlide>

          )
        }
      </Swiper>
        </>
     );
}

export default LandingSlider;
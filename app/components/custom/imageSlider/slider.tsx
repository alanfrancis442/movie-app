"use client";
import React, { useRef, useState,useEffect } from 'react';
import {Get_movies,get_trendign_movies} from '@/app/api_call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.module.css';

interface Movie {
    Poster: string;
}

interface movie_list{
    name: string,
    title:string,
}

//https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg
const image_url = 'https://image.tmdb.org/t/p/w500/'

function Slider({name,title}:movie_list) {
    const [movies, setmovies] = useState([])

    const get_ternding = async () => {
        let movies_list:string[] = await get_trendign_movies();
        console.log('slide',movies_list.slice(0,10));
        setmovies(movies_list.slice(0,10)); 
    }

    useEffect(() => {
        // get_ternding();
        if (title === 'trending'){
            get_ternding();
        }
    }, [])


    return ( 
        <>
        <div className='bg-red-300 py-8'>
            <p className='text-4xl font-bold p-8 capitalize'>{`${name}`}</p>
            <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={false}
            navigation={true}
            modules={[ Pagination, Navigation]}
            className="mySwiper bg-red-300"
        >
            {/* {
                Array(5).fill(0).map((item,index) => (
                    <SwiperSlide key={index} className='flex justify-center items-center h-full w-full px-10'>
                        <img src={`https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg`} alt='1' className='' />
                    </SwiperSlide>
                ))
            } */}
            <SwiperSlide className='w-5'></SwiperSlide>

            {
             movies.map((e,i)=>{
            //   console.log(e.backdrop_path);
              return (
                <SwiperSlide key={i} className=' bg-blue-200'>
                  <img
                  className='w-full h-full object-cover object-center'
                  src={`${image_url}/${e.poster_path}`} alt='1' />
                </SwiperSlide>
              )
            
            })
          }
        </Swiper>
        </div>
        </>
     );
}

export default Slider;
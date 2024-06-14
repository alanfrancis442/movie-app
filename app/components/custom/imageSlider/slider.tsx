"use client";
import React, { useRef, useState,useEffect } from 'react';
import {
    Get_movies,
    get_trendign_movies,
    get_trendign_tvshows,
    get_top_rated,
    air_today
} from '@/app/api_call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.module.css';
import { get } from 'http';

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
        // console.log('slide',movies_list.slice(0,10));
        setmovies(movies_list.slice(0,10)); 
    }

    const get_tvshows = async () => {
        let movies_list:string[] = await get_trendign_tvshows();
        // console.log('slide',movies_list.slice(0,10));
        setmovies(movies_list.slice(0,10)); 
    
    }

    const get_topRated = async () => {
        let movies_list:string[] = await get_top_rated();
        // console.log('slide',movies_list.slice(0,10));
        setmovies(movies_list.slice(0,10)); 
    
    
    }

    const get_air_today = async () => {
        let movies_list:string[] = await air_today();
        // console.log('slide',movies_list.slice(0,10));
        setmovies(movies_list.slice(0,10)); 
    
    }


    useEffect(() => {
        // get_ternding();
        if (title === 'trending'){
            get_ternding();
        }
        else if (title === 'ttvshows'){
            get_tvshows();
            // console.log('tvshows');
        }
        else if (title === 't_rated'){
            get_topRated();
        }
        else if (title === 'air_tday'){
            get_air_today();
        }
    }, [])


    return ( 
        <>
        <div className='py-14'>
            <Swiper
            slidesPerView={6}
            spaceBetween={12}
            loop={false}
            navigation={true}
            modules={[ Pagination, Navigation]}
            className="mySwiper"
        >
            {/* {
                Array(5).fill(0).map((item,index) => (
                    <SwiperSlide key={index} className='flex justify-center items-center h-full w-full px-10'>
                        <img src={`https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg`} alt='1' className='' />
                    </SwiperSlide>
                ))
            } */}
            <SwiperSlide className=''><p className=''>{name}</p></SwiperSlide>

            {
             movies.map((e,i)=>{
            //   console.log(e.backdrop_path);
              return (
                <SwiperSlide key={i} className='relative group'>
                  <img
                  className='w-full h-full object-cover object-center rounded-lg '
                  src={`${image_url}/${e.poster_path}`} alt='1' />
                  <div className={`absolute z-10 top-0 min-h-full w-full bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 rounded-lg text-white
                     p-4 pt-32 text-ellipsis translate-y-[150%] group-hover:translate-y-0 duration-500`}>{e.overview!=''?e.overview:"info not avaliable"}</div>
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
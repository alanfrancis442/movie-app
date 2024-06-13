"use client";
import React, { useRef, useState,useEffect } from 'react';
import Get_movies from '@/app/api_call';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.module.css';

interface Movie {
    Poster: string;
}

interface movie_name{
    name: string;
}

//https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg

function Slider({name}:movie_name) {
    const [movies, setmovies] = useState<Movie[]>([])

    const get_movie_list = async (name:string) => {
        let movies_list = await Get_movies(name);
        // setmovies(movies_list);
        console.log(movies_list);
    
    }

    useEffect(() => {
        // get_movie_list(name);
    }, [])


    return ( 
        <>
        <div className='bg-red-300 py-8'>
            <p className='text-4xl font-bold py-4 px-2 capitalize'>{`${name} movies`}</p>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[ Pagination, Navigation]}
            className="mySwiper bg-red-300"
        >
            {
                [1,12,4,2,1,12,4,2].map((item,index) => (
                    <SwiperSlide key={index} className='flex justify-center items-center h-full w-full'>
                        <img src={`https://m.media-amazon.com/images/M/MV5BM2ZiY2IxZjgtNGVlMi00ZTQ5LTk4N2EtZDgwNDdkNjU0MWZhXkEyXkFqcGdeQXVyMTEzOTI1NTc1._V1_SX300.jpg`} alt='1' className='' />
                    </SwiperSlide>
                ))
            }
            {/* <SwiperSlide className=''>Slide 1</SwiperSlide> */}
        </Swiper>
        </div>
        </>
     );
}

export default Slider;
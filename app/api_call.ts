import axios from 'axios';

const Get_movies = async (name:string) => {

    let movies = [];

    try{
        let response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&s=${name}`)
        movies = await response.data.Search;
    }
    catch(err){
        console.log(err);
    }
    return movies;
}

export default Get_movies;
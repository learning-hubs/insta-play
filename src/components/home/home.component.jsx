import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './home.styles.css';
import { Cardd } from '../card/card.component';

const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c70b99bea6383e0862d5335342a2cac9&language=en-US&page=1`).then(res => setTrendingMovies(res.data.results));
  }, []);

  return (
    <div className='container-fluid home-container'>
        <h3>Trending</h3>
        <div className='container cards-container'>
            {
                trendingMovies.map(trendingMovie => <Cardd trendmovie={trendingMovie}/>)
            }
        </div>
    </div>
  )
}

export default Home
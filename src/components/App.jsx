/** @format */
import dotenv from 'dotenv';
import axios from 'axios';
import React, { useRef, useState } from "react";
import Cards from "./Cards";
import MovieModal from "./MovieDetaileModal";
dotenv.config();
const App = () => {
  const search = useRef(null);
  const [Movies, setMovies] = useState([]);
  const [seeValue, setSeeValue] = useState(false);
  const [selectMovie , setSelectMovie] = useState();
  const selectedMovie = (id)=>{
    setSelectMovie(Movies.filter((movie)=> movie.id === id ));
}
  const handelSubmit = (e) => {
    e.preventDefault();
    let newSearch = search.current.value;


        let options = {
              method: 'GET',
              url: 'https://imdb8.p.rapidapi.com/auto-complete',
              params: {q: newSearch },
              headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': process.env.React_App_MOVIE_API_KEY
                  }
                };
                axios.request(options)
                .then((response)=>{
                        setMovies(response.data.d)
                    }).catch((error)=>{
                            console.error(error);
                        });

  };
  const seeMore = () => {
    setSeeValue(true);
  };
  const closebtn = () => {
    setSeeValue(false);
  };
  return (
    <div>
      <header className='head'>
        <h1>Movie App</h1>
        <form onSubmit={handelSubmit} className='searchBar'>
          <input
            type='text'
            placeholder='search'
            name='search'
            ref={search}
            autoComplete='off'></input>
        </form>
      </header>

      {seeValue && <MovieModal closebtn={closebtn} selectMovie={selectMovie}/>}

      <div className='container'>
        {Movies.map((movie) => (
          <Cards
            cardBtn={seeMore}
            selectedMovie={selectedMovie}
            img={movie.i.imageUrl}
            title={movie.l}
            year={movie.y}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div>
      <footer className='footer'>CopyRight 2021</footer>
    </div>
  );
};

export default App;

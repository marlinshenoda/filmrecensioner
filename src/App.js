import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = process.env.REACT_APP_RAPID_API_KEY;
      const url =`https:youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=0&key=${apiKey}`
      //`https://www.youtube.com/watch?v=${apiKey}`
      // `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      try {
        const response = await fetch(url);
        const data = await response.json().then(data => console.log(data));;
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MovieSearch />
      <MovieList movies={movies} />
    </>
  );
}

export default App;

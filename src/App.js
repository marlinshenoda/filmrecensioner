import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';  // justera importen om den är annorlunda
import Header from './components/Header';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = process.env.REACT_APP_RAPID_API_KEY;
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=0`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey, // Din RapidAPI-nyckel här
            'X-RapidAPI-Host': 'youtube.googleapis.com'  // Rätt host för API:t
          }
        });
        const data = await response.json();
        console.log(data);
        setMovies(data.items);  // YouTube API ger en lista av videos i "items"
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);  // Effekt körs en gång vid komponentens första render

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


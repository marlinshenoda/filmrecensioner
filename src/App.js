import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle'; 
import Header from './components/Header';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

    const options = {
      params: {
        maxResults: 50,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };

    // Fetching movies from the API
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/videos`, options);
        console.log("API Response:", data);  // Log the response to see its structure

        // Assuming 'items' contains the list of videos
        setMovies(data.items);
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

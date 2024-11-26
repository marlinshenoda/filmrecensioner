import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle';  // justera importen om den är annorlunda
import Header from './components/Header';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
      
      const options = {
        params: {
          maxResults: 50,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Hämta API-nyckeln från miljövariabler
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
      };
      
      try {
        const response = await axios.get(`${BASE_URL}/videos`, options);
        console.log(response.data);
        setMovies(response.data.items); // Uppdatera movies med data från API:et
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(); // Kör fetchMovies vid första renderingen av komponenten
  }, []); // Den här effektfunktionen körs bara en gång vid initial render

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

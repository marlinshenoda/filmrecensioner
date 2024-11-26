// src/components/MovieList.js
import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  background-color: #2c2c2c;
  width: 250px;
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  color: #fff;
`;

const MovieOverview = styled.p`
  font-size: 14px;
  color: #ccc;
`;

function MovieList({ movies }) {
  return (
    <MovieContainer>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id}>
            <MovieTitle>{movie.snippet.title}</MovieTitle>
            <MovieOverview>{movie.snippet.description}</MovieOverview>
          </MovieCard>
        ))
      ) : (
        <p>No movies found.</p> // Handle the case when there are no movies
      )}
    </MovieContainer>
  );
}

export default MovieList;

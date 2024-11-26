// src/components/MovieSearch.js
import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function MovieSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <SearchContainer>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Sök efter filmer..."
      />
      <Button onClick={() => onSearch(query)}>Sök</Button>
    </SearchContainer>
  );
}

export default MovieSearch;

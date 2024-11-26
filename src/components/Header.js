import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #1c1c1e;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 5px 0 0;
  font-size: 16px;
  color: #ccc;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Filmrecensioner</Title>
      <Subtitle>Utforska och recensera dina favoritfilmer</Subtitle>
    </HeaderContainer>
  );
}

export default Header;

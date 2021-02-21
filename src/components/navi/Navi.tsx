import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

const Navi = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="info">Info</Link>
    </Wrapper>
  );
};

export default Navi;

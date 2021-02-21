import * as React from 'react';
import styled from 'styled-components';

import TopAreaContainer from '../components/main/TopAreaContainer';
import ListContainer from '../components/main/ListContainer';

const Title = styled.h1`
  font-size: 20px;
  padding: 20px;
  text-align: center;
`;

interface Props {
  loading: boolean;
}

const MainView: React.FC<Props> = ({ loading }) => {
  return (
    <>
      {loading && '로딩중...'}
      {!loading && (
        <div>
          <Title>TODO LIST!!</Title>
          <TopAreaContainer></TopAreaContainer>
          <ListContainer></ListContainer>
        </div>
      )}
    </>
  );
};

export default MainView;

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';

import MainViewContainer from './views/MainViewContainer';
import InfoView from './views/InfoView';
import Navi from './components/navi/Navi';

const Wrapper = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <MainViewContainer></MainViewContainer>
        </Route>
        <Route path="/info">
          <InfoView></InfoView>
        </Route>
      </Switch>

      <Navi></Navi>
    </Wrapper>
  );
};

export default App;

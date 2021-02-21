import * as React from 'react';
import { useEffect } from 'react';
import MainView from './MainView.tsx';
import { connect } from 'react-redux';
import { getTodos } from '../modules/todos.js';

const MainViewContainer = ({ loading, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <MainView loading={loading}></MainView>
    </>
  );
};

export default connect(({ todos }) => ({ loading: todos.loading.GET_TODOS }), { getTodos })(MainViewContainer);

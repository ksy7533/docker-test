import * as React from 'react';
import { connect } from 'react-redux';
import List from './List.tsx';
// import { useCallback } from 'react';
// import styled, { css } from 'styled-components';
// import Button from '../common/Button';

const ListContainer = ({ todos }) => {
  return (
    <>
      <List todos={todos}></List>
    </>
  );
};

export default connect(({ todos }) => ({ todos: todos.todos }), {})(ListContainer);

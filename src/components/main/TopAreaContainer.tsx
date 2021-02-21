import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../modules/todos.js';
import TopArea from './TopArea';

interface props {
  addTodo: any;
}

const TopAreaContainer: React.FC<props> = ({ addTodo }) => {
  return <TopArea addTodo={addTodo}></TopArea>;
};

export default connect(() => ({}), {
  addTodo,
})(TopAreaContainer);

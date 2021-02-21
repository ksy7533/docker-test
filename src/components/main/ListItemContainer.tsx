import * as React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { toggleCheckedTodo } from '../../modules/todos';
import { todoItem } from '../../types/todo';

interface props {
  todo: todoItem;
  toggleCheckedTodo: any;
}

const ListItemContainer: React.FC<props> = ({ todo, toggleCheckedTodo }) => {
  return (
    <>
      <ListItem item={todo} toggleCheckedTodo={toggleCheckedTodo}></ListItem>
    </>
  );
};

export default connect(() => ({}), { toggleCheckedTodo })(ListItemContainer);

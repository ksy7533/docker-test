import * as React from 'react';
import styled from 'styled-components';
import ListItemContainer from './ListItemContainer';
import { todoItem } from '../../types/todo';

const Wrapper = styled.div`
  padding: 20px;
`;

// interface todoItem {
//   id: string;
//   text: string;
//   checked: boolean;
// }

interface props {
  todos: Array<todoItem>;
}

const List: React.FC<props> = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((todo, index) => {
        return <ListItemContainer todo={todo} key={`${todo.id}-${index}`}></ListItemContainer>;
      })}
    </Wrapper>
  );
};

export default List;

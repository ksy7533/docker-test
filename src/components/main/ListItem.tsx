import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import { todoItem } from '../../types/todo';

const Wrapper = styled.div`
  padding: 10px20px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const Input = styled.input.attrs({ type: 'text', readOnly: true })`
  padding: 5px;
`;

interface props {
  item: todoItem;
  toggleCheckedTodo: (id: string) => void;
}

const ListItem: React.FC<props> = ({ item, toggleCheckedTodo }) => {
  const handleClickUpdate = useCallback(() => {
    console.log('dd');
  }, []);

  const handleChangeCheckBox = useCallback(() => {
    console.log(item.id);
    toggleCheckedTodo(item.id);
  }, []);

  return (
    <Wrapper>
      <CheckBox checked={item.checked} onChange={handleChangeCheckBox}></CheckBox>
      <Input value={item.text}></Input>
      <Button status="primary" handleClickEvent={handleClickUpdate}>
        수정
      </Button>
    </Wrapper>
  );
};

export default ListItem;

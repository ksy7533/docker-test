import * as React from 'react';
import { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Input = styled.input.attrs({ type: 'text' })``;

interface props {
  addTodo: (inputValue: string) => void;
}

const TopArea: React.FC<props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  const handleClickDelete = useCallback((e) => {
    console.log('삭제');
  }, []);

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (inputValue === '') return;
      addTodo(inputValue);
      setInputValue('');
    },
    [inputValue, addTodo],
  );

  const handleChangeInputValue = useCallback((e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  }, []);

  const handleClickSave = useCallback(() => {
    console.log('저장');
  }, []);

  return (
    <div>
      <div>
        <Button status="primary" handleClickEvent={handleClickSave}>
          저장
        </Button>
      </div>
      <Form onSubmit={handleSubmitForm}>
        <Button status="warn" handleClickEvent={handleClickDelete}>
          선택삭제
        </Button>
        <input ref={inputRef} type="text" value={inputValue} onChange={handleChangeInputValue}></input>
        <Button status="primary" handleClickEvent={handleSubmitForm}>
          추가
        </Button>
      </Form>
    </div>
  );
};

export default TopArea;

import * as React from 'react';
import { useCallback } from 'react';
import styled, { css } from 'styled-components';

type STATUS = 'warn' | 'primary';

interface ButtonStyle {
  status: STATUS;
}

const Button = styled.button<ButtonStyle>`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #eee;

  ${(props) =>
    props.status === 'warn' &&
    css`
      background-color: red;
    `}

  ${(props) =>
    props.status === 'primary' &&
    css`
      background-color: blue;
    `}
`;

interface Props {
  handleClickEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  status: STATUS;
}

const TopArea: React.FC<Props> = (props) => {
  const handleClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.handleClickEvent(e);
  };
  return (
    <Button status={props.status} onClick={handleClickEvent}>
      {props.children}
    </Button>
  );
};

export default TopArea;

import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  padding: 10px 20px;
  border: 1px solid rgb(0, 114, 206);
  border-radius: 10px;
  cursor: pointer;

  min-width: 160px;

  background: rgb(0, 114, 206);
  color: white;

  &:hover {
    background: #02579c;
    transition: all 0.4s ease;
  }
`;

import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 220px;
  min-width: 200px;
  height: 40px;
  padding: 10px 20px 10px 10px;
  margin: 10px;
  border: 2px solid rgb(0, 114, 206);
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  line-height: 1.2em;

  &:focus {
    border-color: #a6b4ff;
    transition: all 0.4s ease;
  }
`;

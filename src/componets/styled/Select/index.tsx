import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  max-width: 160px;
  height: 50px;
  padding: 10px 0px 10px 10px;
  margin: 10px;
  border: 2px solid rgb(0, 114, 206);
  border-radius: 10px;
  outline: none;
  font-size: 18px;

  &:focus {
    border-color: #a6b4ff;
    transition: all 0.4s ease;
  }
`;

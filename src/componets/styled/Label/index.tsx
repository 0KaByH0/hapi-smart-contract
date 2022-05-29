import styled from 'styled-components';

export const Label = styled.label`
  min-width: 160px;
  text-align: center;
  font-size: 18px;
  line-height: 1.2em;
`;

export const UserName = styled.h2`
  display: inline-block;
  font-size: 18px;

  margin-right: 15px;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;

  width: 100%;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

export const AppContainer = styled.div`
  overflow-x: hidden;
`;

export const NetworkSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 auto;

  @media (max-width: 530px) {
    height: 140px;
    flex-direction: column;
  }
`;

export const InteractSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 70%;

  width: 50%;
`;

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 60%;

  width: 50%;
`;

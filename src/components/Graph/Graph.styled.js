import styled from 'styled-components';

export const GraphSection = styled.div`
  border-radius: 20px;
  background: #e8e8e8;

  padding: 26px 40px 40px 40px;
  margin-bottom: 80px;

  height: 370px;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    height: 460px;
  }

  @media screen and (min-width: 1200px) {
    height: 480px;

  }

`;

export const Title = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }

`;

export const GraphBox = styled.div`
  position: relative;
  width: 100%;

  height: 370px;

 

  @media screen and (max-width: 1024px) {
    height: 400px;
  }

  @media screen and (max-width: 600px) {
    height: 293px;
  }
`;
import styled from 'styled-components';

export const CardListBox = styled.div`
  display: block;
  height: 372px;
  width: 100%;
  border-radius: 20px;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    height: 365px;
  }

  @media screen and (min-width: 1200px) {
    height: 435px;
  }
`;

export const CardListText = styled.p`
  color: #878787;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
`;


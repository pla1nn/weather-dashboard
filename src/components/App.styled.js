import styled from 'styled-components';

export const CardListBox = styled.div`
  display: block;
  height: 392px;
  width: 100%;
  border-radius: 20px;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 352px;
  }

  @media screen and (min-width: 1200px) {
    height: 430px;
  }
`;

export const CardListText = styled.p`
  color: #878787;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
`;


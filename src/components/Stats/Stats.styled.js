import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  flex-shrink: 0;
  border-radius: 15px;
  background: #e8e8e8;

  display: flex;
  flex-wrap: wrap;
  padding: 35px 43px;
  gap: 35px;

  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    padding: 30px;
    gap: 30px 21px;

    margin-bottom: 50px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px 77px;
    gap: 40px 58px;
  }
`;

export const Item = styled.li`
  width: 207px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  padding: 15px;

  @media screen and (min-width: 768px) {
    width: 177px;
    height: 200px;
    padding: 15px;
  }

  @media screen and (min-width: 1200px) {
    width: 290px;
    height: 217px;
  }
`;

export const Text = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const Condition = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 85px;
    height: 85px;
  }
`;

import styled from 'styled-components';

export const List = styled.ul`
  width: 1140px;
  height: 554px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e8e8e8;

  display: flex;
  flex-wrap: wrap;
  gap: 40px 58px;
  padding: 40px 77px;
`;

export const Item = styled.li`
  width: 290px;
  height: 217px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;

  padding-top: 20px;
`;

export const Text = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Condition = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 23px;
`;

export const Image = styled.img`
  margin: 0 auto;
`;

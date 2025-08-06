import styled from 'styled-components';

export const TableSection = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 15px;
  background: #e8e8e8;
  padding: 18px 25px 35px 25px;

  @media screen and (min-width: 768px) {
    padding: 20px 35px 35px 35px;
  }

  @media screen and (min-width: 1200px) {
    padding: 26px 76px 42px 76px;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 35px 43px;

  @media screen and (min-width: 768px) {
    gap: 17px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const Item = styled.li`
  width: 100px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media screen and (max-width: 768px) {
    :last-child {
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    padding: 10px 15px;
    justify-content: space-between;
    height: 40px;
  }

  @media screen and (min-width: 1200px) {
    padding: 14px 50px;
    height: 47px;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: #000;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 7px;
  }

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    margin-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 45px;
    height: 45px;
  }
`;

export const TableBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
  }
`;

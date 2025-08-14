import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  border-radius: 20px;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  :nth-child(n) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
  }

  @media screen and (min-width: 1200px) {
    width: 320px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const LocationText = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: 768px) {
    
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const Time = styled.h3`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const ForecastBtn = styled.button`
  color: #000;
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 500;
  border-radius: 10px;
  background: #ffb36c;
  width: 93px;
  height: 23px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: 10px;
    width: 114px;
  height: 28px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :nth-child(1) {
    border-right: 1.5px solid #000;
    padding-right: 13px;
  }
  :nth-child(2) {
    padding-left: 13px;
  }

  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const DateText = styled.p`
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;

  }
`;

export const Image = styled.img`
  width: 83px;
  height: 83px;
  margin: 0 auto;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    width: 76px;
    height: 76px;
  }

  @media screen and (min-width: 1200px) {
    width: 120px;
    height: 120px;
  }
`;

export const Degrees = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const ControlsBox = styled.div``;

export const Reload = styled.button`
  margin-right: 16px;
  width: 27px;
  height: 27px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const Like = styled.button`
  width: 27px;
  height: 27px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const SeeMore = styled.button`
  width: 84px;
  height: 27px;
  font-size: 9px;
  font-weight: 500;
  font-family: Montserrat;

  border-radius: 10px;
  background: #ffb36c;

  @media screen and (min-width: 768px) {
    width: 81px;
    height: 24px;
  }

  @media screen and (min-width: 1200px) {
    width: 99px;
    height: 30px;

    font-size: 10px;

  }
`;

export const Delete = styled.button`
  width: 27px;
  height: 27px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;

export const BtnContainer = styled.div`
    margin-bottom: 15px;
  
  :first-child {
    margin-right: 20px;
  }
`


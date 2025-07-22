import styled from 'styled-components';

export const Item = styled.li`
  margin-top: 60px;
  width: 320px;
  border-radius: 20px;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;

  :nth-child(n) {
    text-align: center;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
`;

export const LocationText = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const Time = styled.h3`
  color: #000;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ForecastBtn = styled.button`
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 500;
  border-radius: 10px;
  background: #ffb36c;
  display: inline-flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 114px;
  height: 28px;
  margin: 0 auto;
  margin-bottom: 15px;
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
`;

export const DateText = styled.p`
  color: #000;
  text-align: right;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const Degrees = styled.h2`
  color: #000;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const ControlsBox = styled.div``;

export const Reload = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`;

export const Like = styled.button`
  width: 30px;
  height: 30px;
`;

export const SeeMore = styled.button`
  display: inline-flex;
  padding: 8px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background: #ffb36c;
`;

export const Delete = styled.button`
  width: 30px;
  height: 30px;
`;

import styled from 'styled-components';

export const PetsContainer = styled.div`
  margin-bottom: 200px;
`;

export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  width: 270px;
`;

export const Image = styled.img`
  width: 270px;
  height: 208px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background: #ffb36c;
`;

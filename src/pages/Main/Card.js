import React from 'react';
import styled from 'styled-components';

const Card = ({ title, data }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardWrapper>
        {data.map(item => {
          return (
            <MainCard key={item.id}>
              <MainCardImg src={item.img} alt="" />
              <CardBottom>
                <Nation>{item.nation}</Nation>
                <Trip>{item.trip}</Trip>
                <Date>{item.date}</Date>
                <DisplayFlex>
                  <Price>{item.price}</Price>
                  <AirLine>{item.airline}</AirLine>
                </DisplayFlex>
              </CardBottom>
            </MainCard>
          );
        })}
      </CardWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-bottom: 50px;
`;

const CardTitle = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
`;

const MainCard = styled.div`
  width: 250px;
  height: 260px;
  border: 1px solid #d6d4d4;
  border-radius: 2px;
`;

const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const MainCardImg = styled.img`
  width: 100%;
  height: 140px;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Nation = styled.span`
  height: 24px;
  font-size: 15px;
  font-weight: 600;
`;

const Trip = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #848c94;
`;

const Date = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #848c94;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #343a40;
`;

const AirLine = styled.span`
  font-size: 12px;
  color: #025ba5;
`;

export default Card;

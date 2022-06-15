import React from 'react';
import styled, { css } from 'styled-components/macro';

const SelectCard = () => {
  return (
    <div>
      <CardContainer>
        <SmallArrow
          src="https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/KE.png"
          alt="항공사이미지"
        />
        <FlightNumber>
          <span>대한항공</span>
          <FlightName>KE1234 </FlightName>
        </FlightNumber>
        <FlightTime>
          <FlightDepartTime>
            <TextDepartureTime>7:30</TextDepartureTime>
            <Origin>GMP</Origin>
          </FlightDepartTime>
          <EstimatedTime>
            <LongArrowImg src="/images/longArrow.svg" alt="arrow" />
            <TextTimeString>1시간 10분</TextTimeString>
          </EstimatedTime>
          <FlightArriveTime>
            <TextArrivalTime>8:40</TextArrivalTime>
            <TextDestination>CJU</TextDestination>
          </FlightArriveTime>
        </FlightTime>
        <FlightPrice>48,550원</FlightPrice>
      </CardContainer>
    </div>
  );
};

const alignLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const alignRight = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 20px 24px;
  width: auto;
  height: auto;
  background-color: white;
`;

const SmallArrow = styled.img`
  width: 32px;
  margin: 4px 0;
`;

const FlightNumber = styled.span`
  ${alignLeft};
  width: 94px;
  height: 40px;
  margin: 0 16px;
  font-weight: 300;
`;

const FlightName = styled.span`
  margin-top: 6px;
`;

const FlightTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
  width: 250px;
  height: 40px;
`;

const FlightDepartTime = styled.span`
  ${alignRight};
  margin-right: 16px;
`;

const TextDepartureTime = styled.span`
  font-size: 20px;
`;

const Origin = styled.span`
  margin-top: 6px;
  font-weight: 300;
  font-size: 16px;
`;

const EstimatedTime = styled.span`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
  margin-right: 16px;
`;

const LongArrowImg = styled.img`
  width: 80px;
`;

const TextTimeString = styled.span`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
`;

const FlightArriveTime = styled.span`
  ${alignRight};
  margin-right: 16px;
`;

const TextArrivalTime = styled.span`
  font-size: 20px;
`;

const TextDestination = styled.span`
  margin-top: 6px;
  font-weight: 300;
  font-size: 16px;
`;

const FlightPrice = styled.span`
  margin-right: 16px;
  font-size: 20px;
`;

export default SelectCard;

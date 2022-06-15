import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

const ReservationListCard = ({
  name,
  price,
  src,
  origin,
  destination,
  departure_time,
  arrival_time,
  duration,
  flight_name,
}) => {
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate(`/payment`);
  };

  const [time, minute] = duration.split(':');

  const convertTime = time => {
    return `${Number(time)}시간`;
  };

  const convertMinute = minute => {
    if (minute === '00') {
      return '';
    } else {
      return ` ${Number(minute)}분`;
    }
  };

  const timeStr = convertTime(time) + convertMinute(minute);

  return (
    <div>
      <CardContainer>
        <SmallArrow src={src} alt="항공사이미지" />
        <FlightNumber>
          <span>{name}</span>
          <FlightName>{flight_name}</FlightName>
        </FlightNumber>
        <FlightTime>
          <FlightDepartTime>
            <TextDepartureTime>{departure_time}</TextDepartureTime>
            <Origin>{origin}</Origin>
          </FlightDepartTime>
          <EstimatedTime>
            <LongArrowImg src="/images/longArrow.svg" alt="arrow" />
            <TextTimeString>{timeStr}</TextTimeString>
          </EstimatedTime>
          <FlightArriveTime>
            <TextArrivalTime>{arrival_time}</TextArrivalTime>
            <TextDestination>{destination}</TextDestination>
          </FlightArriveTime>
        </FlightTime>
        <FlightPrice>{price}</FlightPrice>
        <ChoiceBtn onClick={goToPayment}>선택</ChoiceBtn>
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
  margin-top: 8px;
  padding: 20px 24px;
  width: auto;
  height: auto;
  background-color: white;

  :hover {
    transform: scale(1.01);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 300ms ease-in-out, transform 300ms ease-in-out;
  }
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

const ChoiceBtn = styled.button`
  padding: 10px;
  width: 64px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.blue};
  color: white;
  font-size: 16px;
  ::hover {
    cursor: pointer;
  }
`;

export default ReservationListCard;

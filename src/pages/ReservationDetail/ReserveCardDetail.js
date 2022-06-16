import React from 'react';
import styled from 'styled-components';

function ReserveCardDetail({ userList }) {
  return (
    <ReservedCard>
      {userList && (
        <>
          <UserInfo>
            {userList.user_information?.user_name}의 예약변호는 {userList.code}
            입니다.
          </UserInfo>
          <ReservedBox>
            <TicketBox>
              <PlaceInfo>
                <JourneyPlace>
                  <Journey>
                    <Arrive>
                      <AirportKR>{userList.kor_origin}</AirportKR>
                      <AirportEN>{userList.origin}</AirportEN>
                    </Arrive>
                    <ReservedArrow
                      alt="arrow"
                      src="/images/ReservationDetailArrow.png"
                    />
                    <Departure>
                      <AirportKR>{userList.kor_destination}</AirportKR>
                      <AirportEN>{userList.destination}</AirportEN>
                    </Departure>
                  </Journey>
                  <JourneyInfo>
                    <JourneyAir>
                      <AirLineImg>
                        <AirImg alt="airimag" src={userList.logo_url} />
                      </AirLineImg>
                      <AirText>
                        <li>{userList.airline}</li>
                      </AirText>
                    </JourneyAir>
                    <JourneySeat>
                      <Kind>운항종류</Kind>
                      <OneTrip>편도</OneTrip>
                    </JourneySeat>
                    <JourneyDate>
                      <GoTo>
                        <SpanTitle>출발일</SpanTitle>
                        <Span>06.20(월)</Span>
                      </GoTo>
                      <BackTo>
                        <SpanTitle>도착일</SpanTitle>
                        <Span>06.20(월)</Span>
                      </BackTo>
                    </JourneyDate>
                  </JourneyInfo>
                </JourneyPlace>
                <TotalPrice>
                  <Context>
                    <PriceInfo>
                      <span>총 결제금액</span>
                      <span>
                        (항공요금+유류할증료+제세공과금+발권수수료 포함)
                      </span>
                    </PriceInfo>
                    <PaymentInfo>
                      <TotalUser>
                        <span>총인원</span>
                        <span>2</span>
                        <span>명</span>
                      </TotalUser>
                      <Amount>
                        <span>{userList.total_price}</span>
                      </Amount>
                    </PaymentInfo>
                  </Context>
                  <Terms>
                    <p>
                      (주의) 유류할증료 및 제세공과금은 금일(오늘) 결제
                      기준이며, 발권시점의 환율에 따라 결제 시 변경될 수
                      있습니다.
                    </p>
                  </Terms>
                </TotalPrice>
              </PlaceInfo>
              <DateInfo>
                <Status>
                  <span>예약상태</span>
                  <span>결제완료</span>
                </Status>
                <Time>
                  <p>결제마감시한</p>
                  <p>{userList.date}</p>
                </Time>
                <Info>
                  <span>예약자명 : {userList.user_information?.user_name}</span>
                  <span>이메일 : {userList.user_information?.user_email}</span>
                </Info>
              </DateInfo>
            </TicketBox>
          </ReservedBox>
        </>
      )}
    </ReservedCard>
  );
}

const ReservedCard = styled.div`
  margin: 0 auto;
  width: 1064px;
`;

const UserInfo = styled.h1`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
  line-height: 32px;
  letter-spacing: -0.2px;
`;

const ReservedBox = styled.div``;

const TicketBox = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 10px;
  border-top: 2px solid #51abf3;
  border-bottom: 1px solid #e9ecef;
  overflow: hidden;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  width: 824px;
  box-sizing: border-box;
`;

const JourneyPlace = styled.div`
  display: flex;
`;

const Journey = styled.div`
  display: flex;
  margin-bottom: 32px;
  color: #343a40;
  padding: 0 16px;
`;

const Arrive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 144px;
`;

const Departure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 144px;
`;

const AirportKR = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: #575e63;
`;

const AirportEN = styled.div`
  margin-top: 10px;
  font-weight: 400;
  color: #6d6f71;
`;

const ReservedArrow = styled.img`
  width: 50px;
  height: 10px;
`;

const JourneyInfo = styled.div`
  display: flex;
  height: 48px;
  padding-left: 16px;
  margin-right: 16px;
`;

const JourneyDate = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 150px;
  padding-left: 16px;
  padding-right: 16px;
  border-left: 1px solid #e9ecef;
`;

const GoTo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpanTitle = styled.span`
  margin-top: 5px;
  margin-bottom: 6px;
  padding-right: 5px;
  color: #848c94;
  font-size: 14px;
`;

const Span = styled.span`
  color: black;
`;

const BackTo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JourneySeat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 150px;
  padding-left: 16px;
  padding-right: 16px;
  border-left: 1px solid #e9ecef;
`;

const Kind = styled.span`
  margin-top: 5px;
  margin-bottom: 6px;
  color: #848c94;
  font-size: 14px;
`;

const OneTrip = styled.span`
  font-size: 15px;
`;

const JourneyAir = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 48px;
  width: 120px;
  padding-left: 16px;
  padding-right: 16px;
  border-left: 1px solid #e9ecef;
`;

const AirLineImg = styled.div`
  display: flex;
`;
const AirImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
`;

const AirText = styled.div`
  li {
    list-style: none;
    font-size: 14px;
  }
`;

const TotalPrice = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
  padding: 16px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 2px;
`;

const Context = styled.div`
  display: flex;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  span::nth-child(1) {
    display: block;
    padding-top: 2px;
    padding-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #343a40;
  }

  span:nth-child(2) {
    height: 40px;
    padding-top: 10px;
    padding-bottom: 16px;
    font-size: 12px;
    color: #848c94;
  }
`;

const PaymentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding-left: 10px;
  }
`;

const TotalUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 220px;

  span {
    justify-content: center;
    text-align: center;
  }

  span:nth-child(2) {
    font-size: 20px;
  }
`;

const Amount = styled.div`
  font-size: 28px;
  font-weight: bold;

  span {
    justify-content: center;
    text-align: center;
  }
`;

const Terms = styled.div`
  height: 40px;
  padding-top: 20px;
  padding-bottom: 16px;
  padding-left: 20px;
  font-size: 14px;
  border-top: 1px solid #ebe9e9;
  color: #848c94;
`;

const DateInfo = styled.div``;

const Status = styled.div`
  margin-bottom: 12px;

  span:nth-child(1) {
    color: #848c94;
    padding-right: 10px;
  }
`;

const Time = styled.div`
  padding-bottom: 20px;

  p:nth-child(1) {
    padding-top: 5px;
    padding-bottom: 15px;
    font-size: 15px;
    color: #848c94;
  }

  p:nth-child(2) {
    margin-top: 6px;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #2b96ed;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  border-top: 1px dotted #dee2e6;
  overflow: hidden;

  span {
    margin-bottom: 8px;
    font-size: 13px;
    color: #666d75;
  }
`;

export default ReserveCardDetail;

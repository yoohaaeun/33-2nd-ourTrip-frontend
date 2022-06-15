import React, { Fragment, useState } from 'react';
import styled from 'styled-components/macro';
import Agree from '../../components/Agree/Agree';
import SelectCard from './SelectCard';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { GiInfo } from 'react-icons/gi';
import PriceDetailInfo from './PriceDetailInfo';
import RservationPersonInfo from './RservationPersonInfo';
import Passenger from './Passenger';

const Payment = () => {
  const [clickedTab, setClickedTab] = useState(true);
  return (
    <>
      <NavLayout>여기는 Nav</NavLayout>
      <ReservationWrapper>
        <ToDoReservation>예약하기</ToDoReservation>
      </ReservationWrapper>
      <LeftAside>
        <Select>
          <SelectFlight>선택한 항공권</SelectFlight>
          <FlightInfo>
            <DepartBox>가는편</DepartBox>
            <LocationInfo>김포</LocationInfo>
            <ImgData src="/images/smallArrow.svg" alt="arrow" />
            <LocationInfo>제주</LocationInfo>
            <FlightDate>06월20일(금)</FlightDate>
          </FlightInfo>
          <CardList>
            {/* {flightList && <FlightList flightList={flightList} />} */}
            <SelectCard />
          </CardList>
          <PriceContainer>
            <TotalPrice>총 금액</TotalPrice>
            <RightPriceContainer>
              <TotalPerson>총 3명</TotalPerson>
              <TotalPriceText>48,550원</TotalPriceText>
            </RightPriceContainer>
          </PriceContainer>
          <PriceInfo>
            <InfoButton onClick={() => setClickedTab(!clickedTab)}>
              {clickedTab ? (
                <PriceDetailContainer>
                  <IoIosArrowDown />
                  <PriceDetail>요금정보 자세히 보기</PriceDetail>
                </PriceDetailContainer>
              ) : (
                <PriceDetailContainer>
                  <IoIosArrowUp />
                  <PriceDetail>요금정보 접기</PriceDetail>
                </PriceDetailContainer>
              )}
              {!clickedTab && <PriceDetailInfo />}
            </InfoButton>

            <ReservationPerson>
              <ConfirmContainer>
                <ConfirmFontAlign>
                  <GiInfo />
                  <ConfirmBold>바로 결제해야 예약이 확정돼요!</ConfirmBold>
                </ConfirmFontAlign>
                <ConfirmLight>
                  예약과 동시에 결제가 진행됩니다. 시간이 경과될 경우 좌석이
                  매진되거나 요금이 변동될 수 있습니다.
                </ConfirmLight>
              </ConfirmContainer>
              <RservationPersonInfo />
            </ReservationPerson>
            <Passenger />
          </PriceInfo>
        </Select>
        <Agree />
      </LeftAside>
    </>
  );
};

const NavLayout = styled.div`
  width: 100%;
  padding: 100px;
  height: 123px;
  width: auto;
  background-color: red;
`;

const ReservationWrapper = styled.div`
  margin: 0 auto;
  padding: 50px 0 70px 0;
  width: 100%;
  max-width: 1076px;
  height: 30px;
`;

const LeftAside = styled.div`
  position: static;
  display: flex;
  height: 3000px;
  margin: 0 auto;
  width: 100%;
  max-width: 1076px;
`;

const ToDoReservation = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.colors.fontGray};
`;

const Select = styled.div`
  display: flex;
  flex-direction: column;
  height: 47px;
  border-bottom: ${props => props.theme.borders.borderBox};
`;

const SelectFlight = styled.p`
  padding-bottom: 20px;
  width: 680px;
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.colors.fontGray};
  border: ${props => props.theme.borderBox};
`;

const FlightInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 20px;
  width: 680px;
  height: 40px;
  background-color: white;
  border-bottom: 0.8px solid #eaecef;
`;

const ImgData = styled.img`
  padding-right: 10px;
  width: 25px;
  margin: 20px 0;
`;

const FlightDate = styled.span`
  font-size: 13px;
`;

const LocationInfo = styled.span`
  padding-right: 10px;
  font-size: 18px;
`;

const DepartBox = styled.span`
  margin-right: 10px;
  padding: 3px;
  width: 40px;
  height: 20px;
  background-color: #3a84d4;
  border-radius: 8%;
  color: white;
  font-size: 12px;
  text-align: center;
`;

const CardList = styled.div`
  display: flex;
  margin: auto 0;
  flex-direction: column;
  border-bottom: 0.8px solid #eaecef;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin: 20px 0;
`;

const TotalPrice = styled.span`
  font-size: 14px;
  color: #353a3f;
`;

const RightPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TotalPerson = styled.span`
  margin-right: 10px;
  font-size: 16px;
  color: #676d74;
`;

const TotalPriceText = styled.span`
  font-size: 18px;
  color: #353a3f;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  height: 72px;
  padding: 20px 0;
`;

const InfoButton = styled.div`
  text-align: right;
`;

const PriceDetailContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 48px;
  border: 1px solid #cfd4d9;
  border-radius: 10px;
  background-color: transparent;
  transition: all 0.08s ease-out;
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  padding: 15px 15px 15px 25px;
  width: 680px;
  height: 80px;
  background-color: #f8f9fa;
`;

const ConfirmFontAlign = styled.div`
  display: flex;
  align-items: center;
`;

const ConfirmBold = styled.span`
  padding-left: 11px;
  font-size: 16px;
  font-weight: 700;
`;

const ConfirmLight = styled.span`
  padding: 4px 0 0 27px;
  font-size: 14px;
  font-weight: 400;
`;

const PriceDetail = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const ReservationPerson = styled.div`
  margin-top: 20px;
`;

export default Payment;

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components/macro';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { FiCalendar } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import Selectcitymodal from './SelectCityModal';
import Selectpassengermodal from './SelectPassengerModal';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const CITY_ENG = {
  제주도: 'CJU',
  김포: 'GMP',
  부산: 'PUS',
  청주: 'CJJ',
  여수: 'RSU',
  광주: 'KWJ',
  대구: 'TAE',
  양양: 'YNY',
  군산: 'KUV',
  울산: 'USN',
  포항: 'KPO',
  인천: 'ICN',
};

const Aroundtrip = () => {
  const departureRef = useRef();
  const arrivalRef = useRef();
  const passengerRef = useRef();

  const [openDepSelectModal, setDepOpenSelectModal] = useState(false);
  const [openArrSelectModal, setArrOpenSelectModal] = useState(false);
  const [openPassengerModal, setPassengerOpenModal] = useState(false);

  const depOffSetLeft = departureRef?.current?.getBoundingClientRect()?.x;
  const arrOffSetLeft = arrivalRef?.current?.getBoundingClientRect()?.x;
  const passengerOffSetLeft = passengerRef?.current?.getBoundingClientRect()?.x;

  const offSetTop = departureRef?.current?.getBoundingClientRect()?.y;

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [savedSearch, setSavedSearch] = useState({
    departure: undefined,
    arrival: undefined,
    date: undefined,
    numberOfPassenger: 0,
  });

  const [count, setCount] = useState({
    adult: 0,
    child: 0,
    infant: 0,
  });

  const total = `${count.adult + count.child + count.infant}`;

  const navigate = useNavigate();

  const goToListPage = () => {
    if (
      savedSearch.departure &&
      savedSearch.arrival &&
      savedSearch.date &&
      savedSearch.numberOfPassenger
    ) {
      navigate(
        `/loading/?date=${savedSearch.date}&origin=${savedSearch.departure}&destination=${savedSearch.arrival}`
      );
    } else {
      alert('모든 정보를 입력해 주세요.');
    }
  };
  return (
    <AroundTripContainer>
      <BodySearchBox>
        <CitySelector>
          <StartingPlace
            onClick={() => {
              setDepOpenSelectModal(true);
            }}
            ref={departureRef}
          >
            {savedSearch.departure
              ? `${savedSearch.departure} (${CITY_ENG[savedSearch.departure]})`
              : '김포 (GMP)'}
          </StartingPlace>
          <StartingPlaceIcon>
            <TbArrowsLeftRight />
          </StartingPlaceIcon>
          <Destination
            onClick={() => {
              setArrOpenSelectModal(true);
            }}
            ref={arrivalRef}
            isSavedSearch={savedSearch.arrival}
          >
            {savedSearch.arrival
              ? `${savedSearch.arrival} (${CITY_ENG[savedSearch.arrival]})`
              : '도착지가 어디인가요?'}
          </Destination>
          {openDepSelectModal && (
            <Selectcitymodal
              offSetLeft={depOffSetLeft}
              offSetTop={offSetTop}
              closeModal={setDepOpenSelectModal}
              savedSearch={savedSearch}
              setSavedSearch={setSavedSearch}
              type="departure"
            />
          )}
          {openArrSelectModal && (
            <Selectcitymodal
              offSetLeft={arrOffSetLeft}
              offSetTop={offSetTop}
              closeModal={setArrOpenSelectModal}
              savedSearch={savedSearch}
              setSavedSearch={setSavedSearch}
              type="arrival"
            />
          )}
        </CitySelector>
        <DateSelectorWrapper>
          <DateSelector onClick={() => setShowDatePicker(!showDatePicker)}>
            <DateSelectorIcon />
            <DestinationDate isSavedDate={savedSearch.date}>
              {savedSearch.date ? savedSearch.date[0] : '가는 날 선택'}
            </DestinationDate>
            <div>-</div>
            <ComebackDate isSavedDate={savedSearch.date}>
              {savedSearch.date ? savedSearch.date[1] : '오는 날 선택'}
            </ComebackDate>
          </DateSelector>
          <RangePickerWrapper>
            <RangePickerStyle
              onClick={e => e.stopPropagation()}
              open={showDatePicker}
              onChange={(date, dateString) => {
                setSavedSearch({ ...savedSearch, date: dateString });
                setShowDatePicker(false);
              }}
            />
          </RangePickerWrapper>
        </DateSelectorWrapper>

        <Passenger
          onClick={() => {
            setPassengerOpenModal(true);
          }}
          ref={passengerRef}
        >
          <PassengerUserIcon />
          <PassengerCount>
            승객 <span>{total}</span>
            명, 전체
          </PassengerCount>
          <PassengerArrowIcon />
        </Passenger>
        {openPassengerModal && (
          <Selectpassengermodal
            offSetLeft={passengerOffSetLeft}
            offSetTop={offSetTop}
            closeModal={setPassengerOpenModal}
            savedSearch={savedSearch}
            setSavedSearch={setSavedSearch}
            setCount={setCount}
            count={count}
            total={total}
          />
        )}
        <SearchBtn onClick={goToListPage}>검색</SearchBtn>
      </BodySearchBox>

      <BottomCheckBox>
        <NonstopCheckBox>
          <NonstopInput type="checkbox" id="nonstop" />
          <NonstopLabel htmlFor="nonstop">직항만</NonstopLabel>
        </NonstopCheckBox>

        <FreeBagCheckBox>
          <FreeBagInput type="checkbox" id="freeBag" />
          <FreeBagLabel htmlFor="freeBag">무료 수하물 가능</FreeBagLabel>
        </FreeBagCheckBox>

        <Switch>
          <span>출발/도착 다른 구간</span>
          <SwitchIcon />
        </Switch>
      </BottomCheckBox>
    </AroundTripContainer>
  );
};

const AroundTripContainer = styled.div`
  position: relative;
`;

const BodySearchBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const CitySelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 393px;
  height: 43px;
  border-radius: 2px;
  background-color: white;
  padding: 0;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(250, 250, 250, 0.3);
    transition: box-shadow 200ms linear;
  }
`;

const StartingPlace = styled.div`
  width: 184px;
  font-size: 15px;
  font-weight: 600;
  padding: 0 15px;
  color: black;
`;

const StartingPlaceIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 243, 245);
  width: 25px;
  height: 25px;
  padding: 3px;
  color: #949494;
`;

const Destination = styled.div`
  width: 184px;
  padding: 0 15px;
  font-size: 15px;
  font-weight: ${props => (props.isSavedSearch ? '600' : '400')};
  color: lightgray;
  color: ${props => (props.isSavedSearch ? 'black' : 'lightgray')};
`;

const DateSelectorWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const DateSelector = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  width: 365px;
  height: 43px;
  border-radius: 2px;
  padding: 0 15px;
  background-color: #fff;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(250, 250, 250, 0.3);
    transition: box-shadow 200ms linear;
  }
`;

const RangePickerWrapper = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: -9999;
`;

const RangePickerStyle = styled(RangePicker)`
  .ant-picker-header-view {
    display: flex;
    font-weight: 500;
    line-height: 40px;
  }
`;

const DateSelectorIcon = styled(FiCalendar)`
  width: fit-content;
  color: #51abf3;
  font-size: 20px;
`;

const DestinationDate = styled.div`
  width: 150px;
  padding: 0 0 0 10px;
  font-size: 15px;
  font-weight: ${props => (props.isSavedDate ? '600' : '400')};
  color: ${props => (props.isSavedDate ? 'black' : 'lightgray')};
`;

const ComebackDate = styled.div`
  width: 150px;
  padding: 0 0 0 10px;
  font-size: 15px;
  font-weight: ${props => (props.isSavedDate ? '600' : '400')};
  color: ${props => (props.isSavedDate ? 'black' : 'lightgray')};
`;

const Passenger = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 43px;
  border-radius: 2px;
  background-color: #fff;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(250, 250, 250, 0.3);
    transition: box-shadow 200ms linear;
  }
`;

const PassengerUserIcon = styled(BiUser)`
  width: fit-content;
  font-size: 20px;
  color: #51abf3;
  position: relative;
  top: 1.5px;
`;

const PassengerCount = styled.div`
  width: 170px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const PassengerArrowIcon = styled(IoIosArrowDown)`
  color: #2b2b2b;
  position: relative;
  top: 1.5px;
`;

const SearchBtn = styled.button`
  display: felx;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 43px;
  border-radius: 2px;
  border: none;
  font-size: 15px;
  background-color: #51abf3;
  color: white;

  &:hover {
    background-color: #4a97e6;
    transition: box-shadow 250ms linear;
  }
`;

const BottomCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const NonstopCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const NonstopInput = styled.input`
  background-color: inherit;
  margin: 0 4px 0 0;
  zoom: 1.5;
`;

const NonstopLabel = styled.label`
  font-size: 13px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
`;

const FreeBagCheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const FreeBagInput = styled.input`
  background-color: inherit;
  margin: 0 5px 0 10px;
  zoom: 1.5;
`;
const FreeBagLabel = styled.label`
  font-size: 13px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  border-left: 1px solid #fff;
  padding: 0 10px;
`;

const SwitchIcon = styled(AiOutlineQuestionCircle)`
  font-size: 15px;
  margin-left: 2px;
  position: relative;
  top: -1px;
`;

export default Aroundtrip;

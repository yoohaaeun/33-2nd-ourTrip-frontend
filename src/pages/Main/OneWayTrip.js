import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { FiCalendar } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import Selectcitymodal from './SelectCityModal';
import Selectpassengermodal from './SelectPassengerModal';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router';
import { API } from '../../config';

const CITY_ENG = {
  제주: 'CJU',
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

const Onewaytrip = () => {
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
        `${API.GO_TO_LIST_PAGE}?date=${savedSearch.date}&origin=${savedSearch.departure}&destination=${savedSearch.arrival}`
      );
    } else {
      alert('다 입력해');
    }
  };

  return (
    <>
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
            savedSearch={savedSearch}
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
              {savedSearch.date ? savedSearch.date : '가는 날 선택'}
            </DestinationDate>
          </DateSelector>
          <RangePickerWrapper>
            <DatePicker
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
            setSavedSearch={setSavedSearch}
            savedSearch={savedSearch}
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
      </BottomCheckBox>
    </>
  );
};

const BodySearchBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const CitySelector = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  width: 393px;
  height: 43px;
  border-radius: 2px;
  background-color: white;

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
  align-items: center;
  width: 365px;
  height: 43px;
  border-radius: 2px;
  padding: 0 19px;
  background-color: #fff;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(250, 250, 250, 0.3);
    transition: box-shadow 200ms linear;
  }
`;

const RangePickerWrapper = styled.div`
  position: absolute;
  top: 10px;
  z-index: -9999;
`;

const DateSelectorIcon = styled(FiCalendar)`
  width: fit-content;
  font-size: 20px;
  color: #51abf3;
`;

const DestinationDate = styled.div`
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

export default Onewaytrip;

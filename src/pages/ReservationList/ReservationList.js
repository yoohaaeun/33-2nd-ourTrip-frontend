import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import CheckBox from '../../components/CheckBox/CheckBox';
import FlightList from '../../components/ReservationListCard/FlightList';

const ReservationList = () => {
  const [flightList, setFlightList] = useState([]);
  const [selectAirplane, setSelectAirplane] = useState([]);
  const [selectTime, setSelectTime] = useState([]);
  const [selectSort, setSelectSort] = useState('');
  const [airlineList, setAirlineList] = useState(AIRPLANE_LIST);
  const [timeList, setTimeList] = useState(AIRPLANE_TIME);
  const navigate = useNavigate();
  const params = useParams();

  // FIXME: 백엔드 서버 안열였을 때 사용 예정 추후 삭제 예정
  // useEffect(() => {
  //   const airplaneString = selectAirplane.map(e => `&airline=${e}`).join('');
  //   const timeString = selectTime.map(e => `&timefilter=${e}`).join('');
  //   const sortString = selectSort && `&sort=${selectSort}`;
  //   navigate(`?${params}${airplaneString}${timeString}${sortString}`);
  // }, [selectAirplane, selectTime, selectSort]);

  // useEffect(() => {
  //   fetch('data/planeInfo.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setFlightList(data.results);
  //     });
  // }, []);

  // 백엔드랑 서버 열렸을때 사용할 함수
  useEffect(() => {
    const airplaneString = selectAirplane.map(e => `&airline=${e}`).join('');
    const timeString = selectTime.map(e => `&timefilter=${e}`).join('');
    const sortString = selectSort && `&sort=${selectSort}`;
    navigate(`?${params}${airplaneString}${timeString}${sortString}`);
    fetch(
      `http://10.58.1.178:8000/flights?date=2022-06-20&origin=CJU&destination=GMP${airplaneString}${timeString}${sortString}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setFlightList(data.results);
      });
  }, [selectAirplane, selectTime, selectSort]);

  const handleSelectAirplane = airplanes => {
    if (selectAirplane.includes(airplanes)) {
      setSelectAirplane([
        ...selectAirplane.filter(airplane => airplane !== airplanes),
      ]);
      airlineChecked(airplanes);
    } else {
      setSelectAirplane(prev => [...prev, airplanes]);
    }
  };

  const handleSelectTime = times => {
    if (selectTime.includes(times)) {
      setSelectTime([...selectTime.filter(time => time !== times)]);
      timeChecked(times);
    } else {
      setSelectTime(prev => [...prev, times]);
    }
  };

  const handleSelectSort = e => {
    const { value } = e.target;
    if (selectSort.includes(value)) {
      setSelectSort([...selectSort.filter(id => id !== value)]);
      return;
    } else {
      setSelectSort(value);
    }
  };

  const airlineChecked = id => {
    const checkedItems = airlineList.map(item => {
      if (item.id === id) return { ...item, isChecked: item.isChecked };
      else return item;
    });
    setAirlineList(checkedItems);
  };

  const timeChecked = id => {
    const checkedItems = timeList.map(item => {
      if (item.id === id) return { ...item, isChecked: item.isChecked };
      else return item;
    });
    setTimeList(checkedItems);
  };

  const totalSum = flightList.length;

  return (
    <div>
      <Body>
        <NavLayout>여기는 Nav</NavLayout>
        <ReservationListWrap>
          <CheckBox
            handleSelectTime={handleSelectTime}
            handleSelectAirplane={handleSelectAirplane}
            AIRPLANE_LIST={AIRPLANE_LIST}
            AIRPLANE_TIME={AIRPLANE_TIME}
          />
          <ReservationListContainer>
            <SearchFilter>
              <SearchInfo>
                <TextSpan>
                  <span>검색결과 총 {totalSum} 개</span>
                </TextSpan>
                <InfoTextSpan>
                  성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)
                </InfoTextSpan>
              </SearchInfo>
              <Filter onChange={handleSelectSort}>
                {SORT_OPTION.map(({ id, label, value }) => (
                  <option key={id} value={value}>
                    {label}
                  </option>
                ))}
              </Filter>
            </SearchFilter>
            <FlightInfo>
              <DepartBox>가는편</DepartBox>
              <LocationInfo>김포</LocationInfo>
              <ImgData src="/images/smallArrow.svg" alt="arrow" />
              <LocationInfo>제주</LocationInfo>
              <FlightDate>06월20일(월)</FlightDate>
            </FlightInfo>

            <CardList>
              {flightList && <FlightList flightList={flightList} />}
            </CardList>
          </ReservationListContainer>
        </ReservationListWrap>
      </Body>
    </div>
  );
};

const alignLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Body = styled.div`
  height: auto;
  background-color: #f5f6f7;
  padding-bottom: 30px;
`;

const NavLayout = styled.div`
  width: 100%;
  padding: 100px;
  height: 123px;
  width: auto;
  background-color: red;
`;

const ReservationListWrap = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 360px;
  margin-top: 10px;
`;

const ReservationListContainer = styled.div`
  width: 100%;
`;

const SearchFilter = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  height: 40px;
`;

const SearchInfo = styled.div`
  ${alignLeft}
`;

const TextSpan = styled.span`
  font-weight: 500;
`;
const InfoTextSpan = styled.span`
  font-weight: 300;
  font-size: 13px;
  margin-top: 3px;
`;

const Filter = styled.select`
  ${props => props.theme.flex.flexbox}
  width: 190px;
  height: 40px;
  border: 1px solid #eaebec;
  padding: 0 10px;
`;

const FlightInfo = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 40px;
  background-color: white;
`;

const ImgData = styled.img`
  padding-right: 10px;
  width: 25px;
`;

const FlightDate = styled.span`
  font-size: 13px;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const LocationInfo = styled.span`
  padding-right: 10px;
  font-size: 18px;
`;

const DepartBox = styled.span`
  margin-right: 10px;
  padding: 3px;
  border: 1px solid ${props => props.theme.colors.boxBlue};
  border-radius: 10%;
  color: ${props => props.theme.colors.boxBlue};
  font-size: 12px;
`;

export const SORT_OPTION = [
  { id: 1, label: '가격낮은 순', value: 'low_price' },
  { id: 2, label: '출발시간 빠른 순', value: 'fastest_first' },
  { id: 3, label: '출발시간 늦은 순', value: 'fastest_last' },
];

const AIRPLANE_LIST = [
  { id: 1, airline: '대한항공', isChecked: false },
  { id: 2, airline: '아시아나항공', isChecked: false },
  { id: 3, airline: '진에어', isChecked: false },
];

const AIRPLANE_TIME = [
  { id: 1, timefilter: '새벽 00:00~06:00', isChecked: false },
  { id: 2, timefilter: '오전 06:00~12:00', isChecked: false },
  { id: 3, timefilter: '오후 12:00~18:00', isChecked: false },
  { id: 4, timefilter: '야간 18:00~24:00', isChecked: false },
];

export default ReservationList;

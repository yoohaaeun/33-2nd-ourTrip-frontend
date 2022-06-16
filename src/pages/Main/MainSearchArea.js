import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Aroundtrip from './AroundTrip';
import Onewaytrip from './OneWayTrip';

const Mainsearcharea = () => {
  const [tabMenu, setTabMenu] = useState('편도');

  const menuList = {
    왕복: <Aroundtrip />,
    편도: <Onewaytrip />,
    다구간: <Aroundtrip />,
  };

  return (
    <MainSearchBoxWrapper>
      <SearchBox>
        <ButtonBox>
          <HeaderLeftBtnBox>
            {TRIP_TYPE.map(type => (
              <HeaderLeftBtn
                onClick={() => setTabMenu(type)}
                active={tabMenu === type}
                key={type}
              >
                {type}
              </HeaderLeftBtn>
            ))}
          </HeaderLeftBtnBox>

          <HeaderBtn>
            <HeaderRightBtn>
              <span>항공권 예약내역</span>
              <HeaderRightBtnIcon />
            </HeaderRightBtn>
            <HeaderRightBtn>
              <span>비회원 예약내역</span>
              <HeaderRightBtnIcon />
            </HeaderRightBtn>
          </HeaderBtn>
        </ButtonBox>
        {menuList[tabMenu]}
      </SearchBox>
    </MainSearchBoxWrapper>
  );
};

const MainSearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 227px;
`;

const SearchBox = styled.div`
  width: 1060px;
  height: 130px;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const HeaderLeftBtnBox = styled.div`
  display: flex;
  height: fit-content;
`;

const HeaderLeftBtn = styled.button`
  text-align: center;
  margin-right: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  opacity: 0.5;
  padding: 5px 15px;
  border: none;
  background-color: inherit;

  &:hover {
    opacity: 0.8;
  }

  ${props =>
    props.active &&
    css`
      border-bottom: 2px solid #fff;
      opacity: 1;
      font-weight: 500;

      &:hover {
        opacity: 1;
      }
    `}
`;

const HeaderBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const HeaderRightBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: inherit;
  border: none;
  padding: 0;
  color: white;
  font-weight: 500;
  font-size: 14px;

  span {
    margin-right: 3px;
  }
`;

const HeaderRightBtnIcon = styled(IoIosArrowDroprightCircle)`
  font-size: 18px;
`;

export default Mainsearcharea;

const TRIP_TYPE = ['왕복', '편도', '다구간'];

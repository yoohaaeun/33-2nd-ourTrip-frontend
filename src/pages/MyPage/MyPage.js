import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import ReservationCard from './ReservationCard';
import PrvTripCard from './PrvTripCard';
import CancelTrip from './CancelTrip';

const MyPage = () => {
  const [mycategory, setMycategory] = useState(1);

  const list = {
    1: <ReservationCard />,
    2: <PrvTripCard />,
    3: <CancelTrip />,
  };
  return (
    <MyPageHome>
      <MyPageContainer>
        <MyPageMain>
          <MyTitle>내 여행</MyTitle>
          <MyPageBox>
            <SideBar>
              <Side>
                {MYPAGE_SIDELIST.map(({ id, title }) => (
                  <SideItem
                    key={id}
                    onClick={() => setMycategory(id)}
                    active={mycategory === id}
                  >
                    {title}
                  </SideItem>
                ))}
              </Side>
            </SideBar>
            {list[mycategory]}
          </MyPageBox>
        </MyPageMain>
      </MyPageContainer>
    </MyPageHome>
  );
};

const MyPageHome = styled.div`
  padding-top: 123px;
  position: relative;
  width: 100%;
`;

const MyPageContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1060px;
`;

const MyPageMain = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 80px;
`;

const MyTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 33px;
  font-weight: bold;
  color: var(--gray-800);
  letter-spacing: -0.4px;
`;

const MyPageBox = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Side = styled.div`
  margin-right: 20px;
  border-radius: 4px;
  border: solid 1px #eaeaea;
  cursor: pointer;
`;

const SideItem = styled.div`
  height: 70px;
  display: flex;
  padding: 24px 0px 24px 24px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  font-size: 18px;
  ${props =>
    props.active &&
    css`
      cursor: pointer;
      background-color: #f5f6f7;
      box-shadow: 4px 0 0 0 #2b96ed inset;
    `}
`;

const MYPAGE_SIDELIST = [
  {
    id: 1,
    title: '예정된 여행',
  },
  {
    id: 2,
    title: '지난 여행',
  },
  {
    id: 3,
    title: '취소된 여행',
  },
];

export default MyPage;

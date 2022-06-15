import React from 'react';
import styled from 'styled-components/macro';

function PrvTripCard(props) {
  return (
    <WrapperCon>
      {PRVTRIP_LIST.map(item => {
        return (
          <Container key={item.id}>
            <TotalInfo>
              <ReserveInfo>
                <span>예약완료</span>
                <button>예약 상세 보기 ＞ </button>
              </ReserveInfo>
              <AirlinInfo>
                <NavImg alt="ourtriplogo" src={item.img} />
                <TextBox>
                  <span>{item.title}</span>
                  <span>예약번호 {item.reservenum}</span>
                </TextBox>
                <DepartureBox>{item.date}</DepartureBox>
              </AirlinInfo>
            </TotalInfo>
            <JustBar />
            <CustomerService>
              <span>고객지원실에 문의</span>
            </CustomerService>
          </Container>
        );
      })}
    </WrapperCon>
  );
}
const WrapperCon = styled.div`
  width: 768px;
  min-width: 768px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 160px;
  margin-bottom: 16px;
  padding: 24px;
  border: solid 1px #f5f6f7;
  border-radius: 8px;
  box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
`;

const TotalInfo = styled.div`
  width: 100%;
  margin: auto 24px auto 0px;
`;
const ReserveInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  span {
    padding: 0px 6px;
    display: inline-block;
    border-radius: 4px;
    font-weight: 700;
    font-size: 13px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.4px;
    border: solid 1px #adb5bd;
    background-color: #f8f9fa;
    color: #495056;
  }
  button {
    color: #2b96ed;
    font-weight: 800;
    font-size: 15px;
    background-color: transparent;
    border-style: none;
    cursor: pointer;
  }
`;
const AirlinInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 4px;
`;
const NavImg = styled.img`
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  background-position: 50% 50%;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #f5f6f7;
  margin-right: 12px;
  background-repeat: no-repeat;
  background-size: 28px;
  :hover {
    cursor: pointer;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 5px;

  span:nth-child(1) {
    font-size: 17px;
    font-weight: 600;
  }
  span:nth-child(2) {
    color: #9e9e9e;
    font-weight: 600;
  }
  span {
    margin-top: 10px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const JustBar = styled.div`
  display: flex;
  width: 1px;
  background-color: #eeeeee;
`;

const DepartureBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  margin: auto 0px;
  margin-left: 70px;
  font-weight: 600;
  color: #9e9e9e; ;
`;
const CustomerService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  border-left: 1px solid var(--gray-100);
  span {
    position: relative;
    display: inline-flex;
    justify-content: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    margin: 8px 0px 0px;
    border-radius: 4px;
    text-align: center;
    font-weight: 600;
    background-color: #e9ecef;
    color: gray;
    cursor: pointer;
    :hover {
      background-color: #e6e7e8;
      transition: background-color 100ms linear;
    }
  }
`;

const PRVTRIP_LIST = [
  {
    id: 1,
    title: '[아시아나 항공] 서울 - 런던',
    img: 'https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/OZ.png',
    reservenum: 123456,
    date: '2022-03-01',
  },
  {
    id: 2,
    title: '[대한 항공] 서울 - 코타키나발루',
    img: 'https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/KE.png',
    reservenum: 454645,
    date: '2020-09-11',
  },
  {
    id: 3,
    title: '[제주 항공] 서울 - 제주',
    img: 'https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/7C.png',
    reservenum: 789789,
    date: '2019-06-15',
  },
  {
    id: 4,
    title: '[진에어] 서울 - 부산',
    img: 'https://flights.myrealtrip.com/air/wfw/imgs/mbl/logo/air/LJ.png',
    reservenum: 322329,
    date: '2018-02-15',
  },
];

export default PrvTripCard;

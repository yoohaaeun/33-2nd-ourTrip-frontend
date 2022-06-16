import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

function ReservationCard() {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  const goToDetail = id => {
    const queryString = `/${id}`;
    navigate(`/reservations${queryString}`);
  };

  useEffect(() => {
    fetch('http://10.58.1.178:8000/reservations', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),

        // Authorization:
        //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.MDXWK1agH0knb6gUzkJDfZWG2TNjF99iQtFHy6tVXGo',
      },
    })
      .then(res => res.json())
      .then(data => {
        setCategoryList(data.results);
      });
  }, []);

  return (
    <WrapperCon>
      {categoryList.map(
        ({
          id,
          code,
          airline,
          kor_origin,
          kor_destination,
          logo_url,
          date,
        }) => (
          <Container key={id}>
            <TotalInfo>
              <ReserveInfo>
                <span>예약중</span>
                <button onClick={() => goToDetail(id)}>
                  예약 상세 보기 ＞{' '}
                </button>
              </ReserveInfo>
              <AirlinInfo>
                <NavImg alt="ourtriplogo" src={logo_url} />
                <TextBox>
                  <span>
                    [{airline}]{kor_origin}-{kor_destination}{' '}
                  </span>
                  <span>{code}</span>
                </TextBox>
                <DepartureBox>{date}</DepartureBox>
              </AirlinInfo>
            </TotalInfo>
            <JustBar />
            <CustomerService>
              <span>고객지원실에 문의</span>
            </CustomerService>
          </Container>
        )
      )}
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
    border: solid 1px #51abf3;
    background-color: #f8f9fa;
    color: #51abf3;
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

  span:nth-child(1) {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1px;
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
export default ReservationCard;

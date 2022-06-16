import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegCheckCircle, FaMoneyCheck } from 'react-icons/fa';
import styled from 'styled-components';
import Passenger from './Passenger';
import ReservationCheck from './ReservationCheck';
import ReserveCardDetail from './ReserveCardDetail';

function ReservationDetail() {
  const [userList, setUserList] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `http://10.58.1.178:8000/reservations/${params.id}
    `,
      {
        method: 'GET',
        headers: {
          // Authorization: localStorage.getItem('token'),
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.MDXWK1agH0knb6gUzkJDfZWG2TNjF99iQtFHy6tVXGo',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setUserList(data.results);
      });
  }, []);

  return (
    <ReservationDetailMain>
      <DetailWrapper>
        <StepReserved>
          {STEPCARD_LIST.map(({ id, title, text }) => (
            <StepCard key={id}>
              <Step>
                <StepList>
                  <FaRegCheckCircle size="27" color="#51abf3" />
                  <ReserveTitle>{title}</ReserveTitle>
                  <TitleText>{text}</TitleText>
                </StepList>
              </Step>
            </StepCard>
          ))}
          <StepCard>
            <Step>
              <StepList>
                <FaMoneyCheck size="27" color="#51abf3" />
                <ReserveTitle>발권</ReserveTitle>
                <TitleText>E-Ticket출력,결제 영수증 출력.</TitleText>
              </StepList>
            </Step>
          </StepCard>
        </StepReserved>
      </DetailWrapper>
      <ReserveCardDetail userList={userList} />
      <ReservationCheck />
      <Passenger userList={userList} />
    </ReservationDetailMain>
  );
}

const ReservationDetailMain = styled.div`
  margin: 0px 0 40px;
  padding-top: 150px;
`;

const DetailWrapper = styled.div`
  margin-bottom: 30px;
`;

const StepReserved = styled.div`
  display: flex;
  width: 1064px;
  margin: 0 auto;
`;

const StepCard = styled.div``;

const Step = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 180px;
  height: 130px;
  margin-bottom: 6px;
  margin-right: 32px;
  padding: 25px;
  font-size: 15px;
  z-index: 10;
  border-radius: 4px;
  border: 1px solid #dadcdf;

  :hover {
    background-color: #eef6fe;
    border-color: #51abf3;
    cursor: pointer;
  }
`;

const StepList = styled.ul`
  position: relative;
  width: 100%;
`;

const ReserveTitle = styled.li`
  margin: 10px 0;
  font-size: 17px;
  font-weight: 600;
  color: #495056;
`;

const TitleText = styled.li`
  font-size: 13px;
  padding-bottom: 5px;
  color: #6e6e6e;
`;

const STEPCARD_LIST = [
  { id: 1, title: '예약', text: '좌석-OK 요금 확정 여정 및 운임규정 상세' },
  { id: 2, title: '여권정보', text: '여권/비자 OK' },
  { id: 3, title: '증빙서류', text: '불필요' },
  { id: 3, title: '결제', text: '결제요청' },
];

export default ReservationDetail;

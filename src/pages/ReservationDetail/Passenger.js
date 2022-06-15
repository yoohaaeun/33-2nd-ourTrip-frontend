import React from 'react';
import styled from 'styled-components';
import TotalPayment from './TotalPayment';

function Passenger({ userList }) {
  return (
    <PassengerContainer>
      <Passengers>
        <PassengerTitle>탑승객 정보 및 결제 정보</PassengerTitle>
        <PassengerLaw>운임규정보기</PassengerLaw>
      </Passengers>
      <PassengerTable>
        <TableTitle>
          <li>탑승객</li>
          <li>생년월일</li>
          <li>항공요금</li>
          <li>결제상태</li>
        </TableTitle>
      </PassengerTable>
      {userList.passengers?.map(({ name, gender, birth, price }, index) => (
        <AddTable key={index}>
          <Add>
            <Li>
              <Span>{name}</Span>
              <Span>성인</Span>
              <Span>{gender}</Span>
            </Li>
            <Li>{birth}</Li>
            <Li>{price}</Li>
            <Li>결제요청</Li>
          </Add>
        </AddTable>
      ))}
      <TotalPayment userList={userList} />
    </PassengerContainer>
  );
}

const PassengerContainer = styled.div`
  margin: 0 auto;
  width: 1064px;
  padding-top: 50px;
`;

const Passengers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PassengerTitle = styled.h1`
  height: 32px;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
  line-height: 32px;
  letter-spacing: -0.2px;
`;

const PassengerLaw = styled.button`
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 36px;
  margin-top: -2px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #51abf3;
  border: 1px solid transparent;
  border-radius: 3px;
`;

const PassengerTable = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 10px;
  color: #495056;
  background-color: #fff;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #e9ecef;
`;

const TableTitle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2px;

  li {
    padding-left: 140px;
    width: 200px;
  }

  li:nth-child(1) {
    padding-left: 100px;
    width: 200px;
  }
`;

const AddTable = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 10px;
  color: #495056;
  background-color: #fff;
  border-bottom: 1px solid #e9ecef;
`;

const Add = styled.ul`
  display: flex;
  font-size: 14px;
  text-align: center;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  width: 338px;

  :nth-child(2) {
    width: 200px;
  }
  :nth-child(3) {
    width: 200px;
  }
  :nth-child(4) {
    width: 200px;
  }
  :nth-child(5) {
    width: 200px;
  }
`;

const Span = styled.span`
  margin-right: 35px;

  :nth-child(1) {
    width: 150px;
  }
`;

export default Passenger;

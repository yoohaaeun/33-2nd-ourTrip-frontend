import React from 'react';
import styled from 'styled-components';

function TotalPayment({ userList }) {
  return (
    <PaymentBox>
      <TotalPrice>
        <PayText>총 결제금액</PayText>
        <Pay>{userList.total_price}</Pay>
      </TotalPrice>
    </PaymentBox>
  );
}

const PaymentBox = styled.div`
  margin: 0 auto;
  width: 1064px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  margin-top: -1px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  background-color: #fff;
`;

const PayText = styled.span`
  margin-top: 5px;
  font-weight: 600;
  color: #495056;
`;

const Pay = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #343a40;
`;

export default TotalPayment;

import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

function ReservationCheck(props) {
  return (
    <ReservedCheck>
      <Checked>
        <FaRegCheckCircle size="40" color="#51abf3" />
        <Span>감사합니다</Span>
        <SpanThankYou>
          고객님이 요청하신 항공권 발권이 완료 되었습니다.
        </SpanThankYou>
      </Checked>
    </ReservedCheck>
  );
}

const ReservedCheck = styled.div`
  margin: 0 auto;
  width: 1064px;
  padding-top: 50px;
`;

const Checked = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-top: 2px solid #51abf3;
  border-bottom: 1px solid #dee2e6;
`;

const Span = styled.span`
  padding-top: 10px;
  font-size: 30px;
  color: #51abf3;
`;

const SpanThankYou = styled.span`
  padding-top: 20px;
  font-size: 24px;
  color: #495056;
`;

export default ReservationCheck;

import React from 'react';
import styled, { css } from 'styled-components/macro';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Agree = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('결제가 완료됐습니다!');
    navigate(`/mypage`);
  };

  return (
    <AgreeWrapper>
      <AgreeContainer>
        <ReservationContainer>
          <ToDoReservation>결제 정보</ToDoReservation>
          <TotalPerson>총 3인</TotalPerson>
        </ReservationContainer>
        <ReservationCost>
          <CostText>주문 금액</CostText>
          <CostText>226,500원</CostText>
        </ReservationCost>
        <TotalCost>
          <TotalCostTextAlign>
            <TotalCostTextS>총 결제 금액</TotalCostTextS>
            <TotalCostTextL>226,500원</TotalCostTextL>
          </TotalCostTextAlign>
        </TotalCost>
        <Agreement>
          <AgrrmentText>약관 동의</AgrrmentText>
          <Mandatory>(필수)</Mandatory>
        </Agreement>
        <AgrrmentChekcboxContainer>
          {AGREEMENT_LIST.map(({ id, name }) => {
            return (
              <AgrrmentChekcboxList key={id}>
                <Label>
                  <EachCheckbox type="checkbox" key={id} />
                  {name}
                </Label>
                <IoIosArrowForward />
              </AgrrmentChekcboxList>
            );
          })}
        </AgrrmentChekcboxContainer>
        <PaymentButton onClick={handlePayment}>
          <PaymentPrice>226,500원 결제하기</PaymentPrice>
        </PaymentButton>
      </AgreeContainer>
    </AgreeWrapper>
  );
};

const AlignSpaceBetween = css`
  ${props => props.theme.flex.flexBox('', '', 'space-between')};
`;

const AlignItemCenter = css`
  display: flex;
  align-items: center;
`;

const AgreeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 24px;
  margin-left: 40px;
  width: 340px;
  height: 765px;
  position: sticky;
  top: 0;
  border: 1px solid ${props => props.theme.colors.noneGray};
  border-radius: 5px;
`;

const AgreeContainer = styled.div`
  margin: 0 auto;
`;

const ReservationContainer = styled.div`
  ${AlignSpaceBetween}
  margin:0 auto;
  padding-bottom: 16px;
  width: 293px;
  height: 47px;
  border-bottom: ${props => props.theme.borders.borderBox};
`;

const ToDoReservation = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.colors.fontGray};
`;

const TotalPerson = styled.span`
  font-style: 14px;
  font-weight: 500;
`;

const ReservationCost = styled.div`
  ${AlignSpaceBetween}
  margin:0 auto;
  padding: 24px 0 24px 0;
  width: 293px;
`;

const CostText = styled.span`
  font-size: 14px;
  color: #343a40;
`;

const TotalCost = styled.div`
  ${AlignItemCenter}
  padding: 20px 20px 20px 23px;
  margin-bottom: 20px;
  width: auto;
  height: 60px;
  background-color: #f5fbff;
`;

const TotalCostTextAlign = styled.div`
  ${AlignSpaceBetween}
  width:294px;
`;

const TotalCostTextS = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2b96ed;
`;

const TotalCostTextL = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #2b96ed;
`;

const Agreement = styled.div`
  ${AlignSpaceBetween}
  margin:0 auto;
  padding-bottom: 16px;
  width: 290px;
  height: 47px;
  border-bottom: ${props => props.theme.borders.borderBox};
`;

const AgrrmentText = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.colors.fontGray};
`;

const Mandatory = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.fontGray};
`;

const AgrrmentChekcboxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: cneter;
  margin: 30px auto;
  padding: 22px 16px;
  width: 290px;
  height: auto;
  border: 1px solid #dee2e6;
  border-radius: 4px;
`;

const AgrrmentChekcboxList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  width: auto;
  list-style: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #343a40;
`;

const EachCheckbox = styled.input`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border: 1px solid #dee2e6;
  ::hover {
    cursor: pointer;
  }
`;

const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 290px;
  height: 48px;
  border: transparent;
  background-color: #51abf3;
  border-radius: 3px;
  transition: all 0.08s ease-out;
`;

const PaymentPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const AGREEMENT_LIST = [
  { id: 1, name: '공통 안내사항 동의' },
  { id: 2, name: '결제 규제 동의' },
  { id: 3, name: '변경 및 환불 규정 동의' },
  { id: 4, name: '개인정보 수집 및 이용 동의' },
  { id: 5, name: '개인정보 제3자 제공 동의' },
];

export default Agree;

import React from 'react';
import styled, { css } from 'styled-components/macro';

const RservationPersonInfo = () => {
  return (
    <PersonInfoContainer>
      <InfoContainer>
        <ReservationInfo>예약자 정보</ReservationInfo>
        <Mandatory> (필수)</Mandatory>
      </InfoContainer>
      <ReservationName>
        <PersonName>예약자 이름</PersonName>
        <InputField type="text" defaultValue="윤경연" />
      </ReservationName>
      <EmailAdress>
        <PersonName>이메일 주소</PersonName>
        <InputField type="text" defaultValue="cadyky95@naver.com" />
        <Warning>
          입력하신 이메일로 예약 확정 및 바우처 메일이 전송됩니다. 정확하게
          입력해주세요.
        </Warning>
      </EmailAdress>
      <PhoneNumber>
        <PersonName>휴대전화 번호</PersonName>
        <InputFieldValue type="text" placeholder="'-를 빼고 입력해주세요.'" />
        <Warning>
          스케쥴 변동, 결항 등의 상황 발생 시 연락할 수 있는 번호를 정확하게
          입력해주세요.
        </Warning>
      </PhoneNumber>
    </PersonInfoContainer>
  );
};

const PersonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallTitleFont = css`
  font-size: 14px;
  font-weight: 500;
  color: #343a40;
`;

const InputCss = css`
  width: 250px;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid ${props => props.theme.colors.noneGray};
  border-radius: 5px;
  font-size: 15px;
`;

const InfoContainer = styled.div`
  padding-bottom: 20px;
  width: 680px;
  border-bottom: 0.8px solid #eaecef;
`;

const ReservationInfo = styled.span`
  font-size: 22px;
  color: ${props => props.theme.colors.fontGray};
`;

const Mandatory = styled.span``;

const ReservationName = styled.div`
  padding-top: 40px;
`;

const PhoneNumber = styled.div`
  padding-top: 40px;
`;

const EmailAdress = styled.div`
  padding-top: 40px;
`;

const PersonName = styled.p`
  padding-bottom: 8px;
  ${SmallTitleFont}
`;

const InputField = styled.input`
  ${InputCss}
`;

const InputFieldValue = styled.input`
  ${InputCss}
  ::focus::placeholder {
    color: transparent;
  }
`;

const Warning = styled.p`
  font-size: 12px;
  color: #848c94;
  padding-top: 8px;
`;

export default RservationPersonInfo;

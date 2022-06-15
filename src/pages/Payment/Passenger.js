import React from 'react';
import styled, { css } from 'styled-components/macro';

const Passenger = () => {
  return (
    <PassengerInfoContainer>
      <InfoContainer>
        <PassengerInfo>탑승객 정보</PassengerInfo>
        <Mandatory> (필수)</Mandatory>
      </InfoContainer>

      {PASSENGER_LIST.map(
        ({ id, firstname, lastname, birthday, gender, nation }) => {
          return (
            <>
              <PassengerTitleContainer key={id}>
                <PassengerTitle>
                  <GrayTitle>탑승객</GrayTitle>
                  <BlueTitle>{id}</BlueTitle>
                  <GrayTitle>성인</GrayTitle>
                </PassengerTitle>
                <WarningContainer>
                  <WarningBold>
                    예약 후 변경할 수 없으니 신분증과 동일한 정보를 정확하게
                    입력해주세요.
                  </WarningBold>
                  <WarningBold>
                    외국인 또는 시민권자의 경우 여권 상의 영문 성, 영문 이름을
                    입력하세요.
                  </WarningBold>
                </WarningContainer>
              </PassengerTitleContainer>
              <LastName>
                <PersonName>성{firstname}</PersonName>
                <InputFieldValue type="text" placeholder="홍" />
              </LastName>
              <FirstName>
                <PersonName>이름{lastname}</PersonName>
                <InputFieldValue type="text" placeholder="길동" />
              </FirstName>
              <Birthday>
                <PersonName>생년월일{birthday}</PersonName>
                <InputFieldValue type="text" placeholder="YYYYMMDD" />
                <Warning>성인은 탑승일 기준으로 만 13세 이상입니다.</Warning>
              </Birthday>
              <Gender>
                <PersonName>성별{gender}</PersonName>
                <InputSelect>
                  <option key="1" value="여자">
                    <label htmlFor="1">여자</label>
                  </option>
                  <option key="2" valur="남자">
                    <label htmlFor="2">남자</label>
                  </option>
                </InputSelect>
              </Gender>
              <Nation>
                <PersonName>대한민국{nation}</PersonName>
                <InputFieldValue type="text" placeholder="대한민국" />
              </Nation>
            </>
          );
        }
      )}
    </PassengerInfoContainer>
  );
};

const InputCss = css`
  width: 250px;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid ${props => props.theme.colors.noneGray};
  border-radius: 5px;
  font-size: 15px;
`;

const SmallTitleFont = css`
  font-size: 14px;
  font-weight: 500;
  color: #343a40;
`;

const TitleFont = css`
  font-size: 18px;
  font-weight: 700;
`;

const PassengerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  width: 680px;
  height: auto;
`;

const InfoContainer = styled.div`
  width: 680px;
`;

const PassengerTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 0.8px solid #eaecef;
`;

const PassengerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;
`;

const WarningContainer = styled.div`
  padding-top: 10px;
`;

const WarningBold = styled.p`
  font-size: 16px;
  color: #848c94;
  padding-top: 6px;
`;

const GrayTitle = styled.span`
  ${TitleFont}
  color:#424242;
`;

const BlueTitle = styled.span`
  ${TitleFont}
  color:#2B96ED;
`;

const PassengerInfo = styled.span`
  font-size: 22px;
  color: ${props => props.theme.colors.fontGray};
`;

const Mandatory = styled.span``;

const LastName = styled.div`
  padding-top: 40px;
`;

const FirstName = styled.div`
  padding-top: 40px;
`;

const Birthday = styled.div`
  padding-top: 40px;
`;

const Gender = styled.div`
  padding-top: 40px;
`;

const Nation = styled.div`
  padding-top: 40px;
`;

const PersonName = styled.p`
  padding-bottom: 8px;
  ${SmallTitleFont}
`;

const InputFieldValue = styled.input`
  ${InputCss}
  ::focus::placeholder {
    color: transparent;
  }
`;

const InputSelect = styled.select`
  ${InputCss}
`;

const Warning = styled.p`
  font-size: 12px;
  color: #848c94;
  padding-top: 8px;
`;

export const PASSENGER_LIST = [
  {
    id: 1,
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    nation: '',
  },
  {
    id: 2,
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    nation: '',
  },
  {
    id: 3,
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    nation: '',
  },
];

export default Passenger;

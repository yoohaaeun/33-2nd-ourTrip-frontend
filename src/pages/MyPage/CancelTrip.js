import React from 'react';
import styled from 'styled-components/macro';

function CancelTrip(props) {
  return (
    <PrvTripBox>
      <PrvContainer>
        <InfoIcon
          alt="infoicon"
          src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/empty/ic_reservation@2x-f58be91d7ddc8d59fc7fa82cab221b17e4eeef83501e56ff8c759a0684816643.png"
        />
        <PrvText>
          <p>취소된 여행이 없습니다.</p>
          <p>
            6개월 내 취소된 여행이 없습니다. <br /> 기간을 다시 설정해보세요.
          </p>
        </PrvText>
        <MoreSearch>
          <span>6개월 더 조회하기</span>
        </MoreSearch>
      </PrvContainer>
    </PrvTripBox>
  );
}
const PrvTripBox = styled.div`
  display: flex;
  justify-content: center;
  width: 768;
  min-width: 768px;
`;
const PrvContainer = styled.div`
  text-align: center;
  padding-top: 48px;
`;
const InfoIcon = styled.img`
  width: 58px;
  height: 58px;
  margin: 32px auto;
`;
const PrvText = styled.div`
  margin-bottom: 24px;
  p:nth-child(1) {
    margin: 0px auto 8px;
    font-size: 22px;
    font-weight: bold;
    line-height: 1.33;
    letter-spacing: -0.4px;
    text-align: center;
    color: var(--gray-800);
  }
  p:nth-child(2) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.57;
    letter-spacing: -0.4px;
    text-align: center;
    color: #afb4b9;
  }
`;

const MoreSearch = styled.button`
  display: block;
  min-width: 180px;
  height: 48px;
  padding: 16px 32px 16px 33px;
  border-radius: 4px;
  border: none;
  margin: 24px auto 56px;
  background-color: #51abf3;
  span {
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.2px;
    text-align: center;
    color: white;
  }
`;

export default CancelTrip;

import React from 'react';
import styled, { css } from 'styled-components/macro';

const PriceDetailInfo = () => {
  return (
    <div>
      <DetailInfoContainer>
        <PersonNumContainer>
          <PersonContainer>
            <TotalPerson>성인</TotalPerson>
            <ToralPersonNum>3</ToralPersonNum>
            <TotalPerson>명</TotalPerson>
          </PersonContainer>
          <TotalPrice>226,500원</TotalPrice>
        </PersonNumContainer>
        <FlightPrcieDetailContainer>
          <FlightPriceDetail>
            <FlightPrice>항공요금</FlightPrice>
            <PersonNum>3명</PersonNum>
            <EachPrice>158,700원</EachPrice>
          </FlightPriceDetail>
          <FlightPriceDetailPaddingBottom>
            <FlightPrice>유류할증료</FlightPrice>
            <PersonNum>3명</PersonNum>
            <EachPrice>52,800원</EachPrice>
          </FlightPriceDetailPaddingBottom>
          <FlightPriceDetailPaddingBottom>
            <FlightPrice>제세공과금</FlightPrice>
            <PersonNum>3명</PersonNum>
            <EachPrice>12,000원</EachPrice>
          </FlightPriceDetailPaddingBottom>
          <FlightPriceDetailPaddingBottom>
            <FlightPrice>발권수수료</FlightPrice>
            <PersonNum>3명</PersonNum>
            <EachPrice>3,000원</EachPrice>
          </FlightPriceDetailPaddingBottom>
        </FlightPrcieDetailContainer>
      </DetailInfoContainer>
    </div>
  );
};

const AlignCenter = css`
  display: flex;
  align-items: center;
`;

const AlignSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;
const PersonFontSize = css`
  font-size: 17px;
  font-weight: 700;
`;

const SmallFont = css`
  font-size: 14px;
  font-weight: 500;
  color: #343a40;
`;

const BorderTopBottom = css`
  border-top: 0.8px solid #eaecef;
  border-bottom: 0.8px solid #eaecef;
`;

const DetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 680px;
`;

const PersonNumContainer = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  padding: 20px 0 8px 0;
  ${BorderTopBottom}
`;

const PersonContainer = styled.div`
  ${AlignCenter}
`;

const TotalPerson = styled.span`
  ${PersonFontSize}
  color: #424242;
`;

const ToralPersonNum = styled.span`
  ${PersonFontSize}
  color: #2b96ed;
`;

const TotalPrice = styled.span`
  font-size: 14px;
  color: #344a40;
`;

const FlightPrcieDetailContainer = styled.div`
  ${BorderTopBottom}
`;

const FlightPriceDetail = styled.div`
  ${AlignSpaceBetween}
  padding: 16px 0 7px 0;
`;

const FlightPriceDetailPaddingBottom = styled.div`
  ${AlignSpaceBetween}
  padding-bottom: 7px;
`;

const FlightPrice = styled.span`
  width: 140px;
  text-align: left;
  ${SmallFont};
`;

const PersonNum = styled.span`
  width: 444px;
  text-align: right;
  ${SmallFont}
`;

const EachPrice = styled.div`
  width: 96px;
  text-align: right;
  ${SmallFont}
`;

export default PriceDetailInfo;

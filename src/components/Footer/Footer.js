import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Wrapper>
          <CsInfo>
            <h1>고객지원실 운영안내</h1>

            <p>
              <span>월~금:</span> 09:00-18:00 (점심시간 12:00-13:00)
            </p>
            <p>
              <span>공휴일,주말:</span> 1:1 채팅 상담만 가능
            </p>
            <p>
              <span>항공권 환불,변경 접수:</span> 월~금 09:00-17:00
            </p>
            <h3>유선 상담 1670-1234</h3>
            <CsButton>1:1채팅상담</CsButton>
          </CsInfo>
          <CategoryInfo>
            {FOOTER_LIST.map((_, id) => {
              return (
                <ul key={id}>
                  {FOOTWER_CATEGORY.map((item, index) => {
                    return <li key={index}>{item[id]}</li>;
                  })}
                </ul>
              );
            })}
          </CategoryInfo>
        </Wrapper>
        <Wrapper>
          <LastInfo>
            <div>이용약관</div>
            <div>개인정보 처리방침</div>
            <div>취소 및 환불정책</div>
          </LastInfo>
        </Wrapper>
        <Wrapper>
          <ComInfo>
            <p>
              상호명 (주)아우어트립 | 대표 손가영 | 개인정보보호책임자 손가영|
              사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호
              2022-서울강남-0260
            </p>
            <p>
              주소 서울특별시 강남구 선릉 427, 위워크 타워(강남) | 이메일
              help@ourtrip.com | 마케팅/제휴 문의 marketing@ourtrip.com
            </p>
            <p>
              자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
              마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
              따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
            </p>
          </ComInfo>
        </Wrapper>
      </FooterBox>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  border-top: 1px solid #e9ecef;
  padding-top: 50px;
  padding-bottom: 30px;
`;

const FooterBox = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1060px;
`;

const Wrapper = styled.section`
  display: flex;
  margin-top: 10px;
  width: 100%;
`;

const CsInfo = styled.section`
  color: #666d75;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  position: relative;
  text-align: left;
  width: 50%;
  ul {
    width: ${100 / 3}%;
    li {
      margin: 8%;
      font-weight: 400;
    }
  }
  h1 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 20px;
    color: #505152;
  }
  h3 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
    font-weight: 400;
    &.lastChild {
      margin-bottom: 40px;
    }
  }
  span {
    margin-right: 6px;
  }
  div {
    margin: 20px 30px 0 0;
  }
`;

const CategoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  ul {
    text-align: left;
    width: 200px;
    li:nth-child(1) {
      color: #666d75;
      font-size: 16px;
      font-weight: 700;
    }
    li {
      margin-top: 20px;
      font-size: 15px;
      color: #727272;
    }
  }
`;
const LastInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  color: #666d75;
  font-size: 14px;
  div {
    margin-right: 30px;
    margin-bottom: 20px;
  }
`;
const ComInfo = styled.div`
  font-size: 12px;
  letter-spacing: -0.2px;
  line-height: 1.67;
  text-align: left;
  color: #848c94;
`;
const CsButton = styled.button`
  justify-content: center;
  width: 110px;
  margin: 16px 0 0;
  padding: 9px 9px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  color: #495056;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  transition: box-shadow 0.2s ease;
`;

const FOOTER_LIST = [1, 2, 3];
const FOOTWER_CATEGORY = [
  ['소개', '파트너', '지원'],
  ['회사소개', '파트너 등록하기', '자주 묻는 질문'],
  ['채용', 'Affiliate 프로그램', '최저가 보장제'],
  ['공고', '리얼가이드', ''],
  ['', '가이드 블로그', ''],
];

export default Footer;

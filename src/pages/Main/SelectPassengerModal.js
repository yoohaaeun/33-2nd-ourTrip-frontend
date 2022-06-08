import React from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Selectpassengermodal = ({ offSetLeft, offSetTop, closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer
        offSetLeft={`${offSetLeft}px`}
        offSetTop={`${offSetTop + 32}px`}
      >
        <HeaderBox>
          <HeaderTitle>인원 & 좌석등급</HeaderTitle>
          <ModalClose onClick={() => closeModal(false)}>
            <CloseIcon />
          </ModalClose>
        </HeaderBox>
        <BodyBox>
          <BodyLeft>
            <ClassText>성인</ClassText>
            <SubText>만 12세 이상</SubText>
          </BodyLeft>
          <CounteBox>
            <MinusBtn />
            <Count>0</Count>
            <PlusBtn />
          </CounteBox>
        </BodyBox>
        <BodyBox>
          <BodyLeft>
            <ClassText>소아</ClassText>
            <SubText>만 12세 미만</SubText>
          </BodyLeft>
          <CounteBox>
            <MinusBtn />
            <Count>0</Count>
            <PlusBtn />
          </CounteBox>
        </BodyBox>
        <BodyBox>
          <BodyLeft>
            <ClassText>성인</ClassText>
            <SubText>24개월 미만</SubText>
          </BodyLeft>
          <CounteBox>
            <MinusBtn />
            <Count>0</Count>
            <PlusBtn />
          </CounteBox>
        </BodyBox>
        <FooterBox>
          <ClassBoxWraper>
            <ClassBox>
              <ClassInput type="radio" id="radio01" name="class" />
              <ClassLabel htmlFor="radio01">일반석</ClassLabel>
            </ClassBox>
            <ClassBox>
              <ClassInput type="radio" id="radio02" name="class" />
              <ClassLabel htmlFor="radio02">프리미엄 일반석</ClassLabel>
            </ClassBox>
          </ClassBoxWraper>
          <ClassBoxWraper>
            <ClassBox>
              <ClassInput type="radio" id="radio03" name="class" />
              <ClassLabel htmlFor="radio03">비즈니스석</ClassLabel>
            </ClassBox>
            <ClassBox>
              <ClassInput
                type="radio"
                id="radio04"
                name="class"
                checked="checked"
              />
              <ClassLabel htmlFor="radio04">전체</ClassLabel>
            </ClassBox>
          </ClassBoxWraper>
        </FooterBox>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: ${props => props.offSetTop};
  left: ${props => props.offSetLeft};
  width: 294px;
  height: auto;
  background-color: #fff;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 25px 25px 0 25px;
`;

const HeaderTitle = styled.div`
  color: #343a40;
  font-size: 14px;
  font-weight: bold;
`;

const ModalClose = styled.button`
  border: none;
  background-color: inherit;
`;

const CloseIcon = styled(VscClose)`
  font-size: 23px;
  color: #999999;
`;

const BodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 25px;
`;

const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassText = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  color: #343a40;
`;

const SubText = styled.div`
  font-size: 12px;
  color: #adb5bd;
`;

const CounteBox = styled.div`
  display: flex;
  align-items: center;
`;

const MinusBtn = styled(AiOutlineMinusCircle)`
  font-size: 28px;
  margin-right: 10px;
  color: #ced4da;
`;

const Count = styled.div`
  font-size: 14px;
`;

const PlusBtn = styled(AiOutlinePlusCircle)`
  font-size: 28px;

  margin-left: 10px;
  color: #51abf3;
`;

const FooterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 25px 15px 25px;
  border-top: 1px solid #f1f3f5;
`;

const ClassBox = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const ClassInput = styled.input`
  position: relative;
  top: -3px;
  margin-right: 6px;
`;

const ClassBoxWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ClassLabel = styled.label`
  font-size: 13px;
  color: #343a40;
`;

export default Selectpassengermodal;

import styled from 'styled-components/macro';
import { VscClose } from 'react-icons/vsc';

const CITY_LIST = [
  '제주',
  '김포',
  '부산',
  '청주',
  '여수',
  '광주',
  '대구',
  '양양',
  '군산',
  '울산',
  '포항',
  '인천',
];

const Selectcitymodal = ({ offSetLeft, offSetTop, closeModal }) => {
  return (
    <ModalBackground>
      <ModalContainer
        offSetLeft={`${offSetLeft}px`}
        offSetTop={`${offSetTop + 32}px`}
      >
        <SelectCityHeader>
          <SelectCity>도시 선택</SelectCity>
          <ModalClose onClick={() => closeModal(false)}>
            <CloseIcon />
          </ModalClose>
        </SelectCityHeader>

        <SearchCityBox>
          <SearchCityInput type="text" placeholder="도시명을 입력하세요." />
          <SearchCityBtn>검색</SearchCityBtn>
        </SearchCityBox>

        <CityOptionBoxTitle>주요도시 바로 선택</CityOptionBoxTitle>
        <CityOptionBox>
          <Domestic>국내</Domestic>
          <CityList>
            {CITY_LIST.map(city => {
              return <City key={city}>{city}</City>;
            })}
          </CityList>
        </CityOptionBox>
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
  background-color: rgba(255, 255, 255, 0.6);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: ${props => props.offSetTop};
  left: ${props => props.offSetLeft};
  width: 746px;
  height: auto;
  padding: 33px;
  background-color: #fff;
`;

const SelectCityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const SelectCity = styled.div`
  font-size: 16px;
`;

const ModalClose = styled.button`
  border: none;
  background-color: inherit;
`;

const CloseIcon = styled(VscClose)`
  font-size: 25px;
`;

const SearchCityBox = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

const SearchCityInput = styled.input`
  width: 550px;
  height: 40px;
  border: 1px solid #dee2e6;
  border-right: none;
  border-radius: 2px;

  &:focus {
    border: 2px solid #51abf3;
  }
`;

const SearchCityBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: none;
  color: white;
  font-size: 15px;
  background-color: #51abf3;
`;

const CityOptionBoxTitle = styled.div`
  font-size: 15px;
  margin-bottom: 18px;
`;

const CityOptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Domestic = styled.div`
  width: 80px;
  height: 120px;
  line-height: 120px;
  padding-left: 10px;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  font-size: 13px;
  color: #495056;
`;

const CityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 120px;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;

const City = styled.div`
  line-height: 40px;
  padding-left: 10px;
  width: 150px;
  height: 40px;
  font-size: 13px;
  color: #494949;

  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7),
  &:nth-child(8) {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
  }

  &:hover {
    cursor: pointer;
    color: #51abf3;
  }
`;

export default Selectcitymodal;

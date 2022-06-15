import React, { useState, useNavigate } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

const Nav = () => {
  const [category, setCategory] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <NavBar pathName={location.pathname}>
      <NavHeader>
        <HeaderBox>
          <Navimg
            alt="ourtriplogo"
            src={
              location.pathname === '/'
                ? '/images/NavLogoWhite.png'
                : '/images/NavLogo.png'
            }
          />
          <HeaderSearch>
            <SearchContainer>
              <SearchInput>
                <TripIcon
                  pathName={location.pathname}
                  size="20"
                  color={location.pathname === '/' ? '#b0b0b0' : '#676D74'}
                />
                <Input
                  pathName={location.pathname}
                  type="text "
                  placeholder="도시나 상품을 검색해주세요"
                />
              </SearchInput>
            </SearchContainer>
          </HeaderSearch>
          <HeaderItems>
            <NavItems pathName={location.pathname}>
              <span>파트너 등록하기</span>

              <span onClick={goToLogin}>로그인</span>

              <span>회원가입</span>
            </NavItems>
          </HeaderItems>
        </HeaderBox>
      </NavHeader>
      <NavBarSubCategory>
        <NavBarSub>
          <NavList pathName={location.pathname}>
            {CATEGORY_LIST.map(item => (
              <SubList
                pathName={location.pathname}
                key={item.id}
                onClick={() => setCategory(item.id)}
                active={category === item.id}
              >
                {item.title}
              </SubList>
            ))}
          </NavList>
        </NavBarSub>
      </NavBarSubCategory>
    </NavBar>
  );
};

const NavBar = styled.div`
  position: absolute;
  height: 123px;
  width: 100%;
  border-bottom: 1px solid rgba(245, 246, 255, 0.15);
  background-color: white;
  ${({ pathName }) =>
    pathName === '/' &&
    css`
      position: absolute;
      background-color: transparent;
    `}
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1060px;
  height: 72px;
  margin: 0 auto;
`;

const HeaderBox = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1060px;
  position: relative;
`;

const Navimg = styled.img`
  width: 96px;
  margin-left: 10px;
`;

const HeaderSearch = styled.div`
  height: 48px;
  margin-left: 24px;
  position: relative;
  width: 340px;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-right: 14px;
`;

const SearchInput = styled.div`
  position: relative;
  display: flex;
  box-align: center;
  align-items: center;
  height: 48px;
  border: none;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  padding: 0px 16px 0px 48px;
  background: rgb(245, 246, 247);
  color: #676d74;
  ${({ pathName }) =>
    pathName === '/' &&
    css`
      background: rgba(245, 246, 255, 0.15);
    `}
  :focus {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.08);
  }
  ::placeholder {
    font-weight: lighter;
    color: #676d74;
    ${({ pathName }) =>
      pathName === '/' &&
      css`
        color: white;
      `}
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  }
  :focus::-moz-placeholder {
    color: transparent;
  }
`;

const TripIcon = styled(FaSistrix)`
  position: absolute;
  left: 15px;
`;

const HeaderItems = styled.div`
  align-items: center;
  display: flex;
  margin-left: 230px;
  height: 100%;
  width: 390px;
  justify-content: flex-end;
`;

const NavItems = styled.div`
  height: 36px;
  margin-right: 8px;
  background-color: transparent;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
  height: 100%;
  line-height: normal;
  padding: 8px 12px;
  color: #676d74;
  ${({ pathName }) =>
    pathName === '/' &&
    css`
      color: white;
    `}
  span {
    margin-left: 29px;
    :hover {
      cursor: pointer;
    }
  }
  span:nth-child(3) {
    padding: 6px 25px;
    border: 1px solid #a7d4f9;
    border-radius: 3px;
    color: #3fa5f7;
    :hover {
      background-color: #eef6fe;
      cursor: pointer;
    }
    ${({ pathName }) =>
      pathName === '/' &&
      css`
        border: 1px solid white;
        color: white;
        :hover {
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }
      `}
  }
`;

const NavBarSubCategory = styled.section`
  display: flex;
  flex-direction: row;
`;

const NavBarSub = styled.div`
  display: flex;
  flex-direction: row;
  width: 1060px;
  margin: 0 auto;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  width: 1060px;
  margin-top: 11px;
  color: #676d74;
  ${({ pathName }) =>
    pathName === '/' &&
    css`
      color: white;
    `}
`;

const SubList = styled.li`
  display: inline-block;
  padding: 6px 6px 15px 6px;
  height: 100%;
  margin: 0 12px;
  font-size: 17px;
  font-weight: 500;
  &::first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #79bef5;
    ${({ pathName }) =>
      pathName === '/' &&
      css`
        border-bottom: 3px solid white;
      `}
  }
  ${props =>
    props.active &&
    css`
      cursor: pointer;
      border-bottom: 3px solid #79bef5;
      ${({ pathName }) =>
        pathName === '/' &&
        css`
          border-bottom: 3px solid white;
        `}
    `}
`;

const CATEGORY_LIST = [
  { id: 1, title: '항공권' },
  { id: 2, title: '투어·티켓' },
  { id: 3, title: '숙소' },
  { id: 4, title: '호캉스' },
  { id: 5, title: '렌터카' },
  { id: 6, title: '패키지' },
  { id: 7, title: '할인혜택' },
];

export default Nav;

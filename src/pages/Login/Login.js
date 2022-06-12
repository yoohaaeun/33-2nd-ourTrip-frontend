import React from 'react';
import styled from 'styled-components';
import { ImBubble } from 'react-icons/im';
import { SiNaver, SiFacebook } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Emoji>👋</Emoji>
        <Header>반갑습니다!</Header>
        <Article>여행의 모든 것, 아워트립</Article>
        <KakaoBtn onClick={handleLogin}>
          <KakaoBubble />
          <p>카카오로 바로 시작</p>
        </KakaoBtn>
        <SocialLogin>
          {SOCIAL_LIST.map(({ id, company, icon }) => {
            return (
              <SocialBox key={id}>
                {icon}
                <CursorParagraph>{company}</CursorParagraph>
              </SocialBox>
            );
          })}
        </SocialLogin>
        <SignupMessage>
          <Paragraph>아직 회원이 아니신가요?</Paragraph>
          <CursorBorderParagraph>회원가입</CursorBorderParagraph>
        </SignupMessage>
      </LoginWrapper>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  ${({ theme }) => theme.flex.flexBox};
  height: 100vh;
`;

const LoginWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')};
  width: 26.875rem;
  height: 28.125rem;
  border: 1px solid #e9ecef;
`;

const Emoji = styled.div`
  margin-bottom: 2.5rem;
  font-size: 3rem;
  animation: rotate_image 0.3s linear 4 alternate;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(45deg);
    }
  }
`;

const Header = styled.header`
  margin-bottom: 0.7rem;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Article = styled.article`
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const KakaoBtn = styled.button`
  ${({ theme }) => theme.flex.flexBox('', 'center', 'space-around')};
  width: 20rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2.5rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const KakaoBubble = styled(ImBubble)`
  margin-bottom: 0.25rem;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const SocialBox = styled.div`
  display: flex;
  cursor: pointer;
`;

const SignupMessage = styled.div`
  ${({ theme }) => theme.flex.flexBox('', 'center', 'space-between')};
  font-size: 0.9rem;
`;

const Paragraph = styled.p`
  margin: 0rem 0.3rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const CursorParagraph = styled(Paragraph)`
  cursor: pointer;
`;

const CursorBorderParagraph = styled(CursorParagraph)`
  border-bottom: 1px solid gray;
`;

const SOCIAL_LIST = [
  { id: 1, company: 'facebook', icon: <SiFacebook /> },
  { id: 2, company: 'naver', icon: <SiNaver /> },
  { id: 3, company: 'email', icon: <MdEmail /> },
];

export default Login;

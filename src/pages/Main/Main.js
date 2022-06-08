import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Maincarousel from './MainCarousel';
import Mainsearcharea from './MainSearchArea';

const Main = () => {
  const [freeData, setFreeData] = useState([]);
  const [jejuData, setJejuData] = useState([]);
  const [honeyMoonData, setHoneyMoonData] = useState([]);

  useEffect(() => {
    fetch('/data/freeData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFreeData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/jejuData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setJejuData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/honeyMoonData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setHoneyMoonData(data);
      });
  }, []);

  return (
    <MainContainer>
      <MainHeaderImg>
        <Nav />
        <Mainsearcharea />
      </MainHeaderImg>
      <BodyWrapper>
        <Maincarousel />
        <MainBox>
          <Card title="격리 면제 📢 이제 떠나요 🪂" data={freeData} />
          <Card title="제주 휴가 즐겨요 🏝️" data={jejuData} />
          <Card title="허니문 떠나요💍" data={honeyMoonData} />
        </MainBox>
      </BodyWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBox = styled.div`
  margin: auto;
`;

const MainHeaderImg = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 70px;
  background-image: url(https://flights.myrealtrip.com/air/imgs_ibe/mrt/bg/bg_header_pc.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const BodyWrapper = styled.div`
  width: 1060px;
  height: fit-content;
`;

const Nav = styled.div`
  width: 100%;
  height: 123px;
`;

export default Main;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import LoadingPage from './pages/Loading/LoadingPage';
import Footer from '../src/components/Footer/Footer';
import Payment from './pages/Payment/Payment';
import List from './pages/ReservationList/ReservationList';
import ReservationDetail from './pages/ReservationDetail/ReservationDetail';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/list" element={<List />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/reservations/:id" element={<ReservationDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import LoadingPage from './pages/Loading/LoadingPage';
import Footer from '../src/components/Footer/Footer';
import Payment from './pages/Payment/Payment';
import List from './pages/ReservationList/ReservationList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

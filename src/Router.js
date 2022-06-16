import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import KakaoLogin from './pages/Login/KakaoLogin';
import LoadingPage from './pages/Loading/LoadingPage';
import Footer from '../src/components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakao-login" element={<KakaoLogin />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

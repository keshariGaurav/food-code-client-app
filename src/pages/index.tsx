import React, { useState, useEffect, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './login/LoginPage';
import VerifyLogin from './login/VerifyLogin';
import AlertBar from '../Components/AlertBar/AlertBar';
import { RootState, AppDispatch } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

interface PageLayoutProps {
  children: ReactNode;
}

const Pages = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-login" element={<VerifyLogin />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const alert = useSelector((state: RootState) => state.alert);

  return (
    <>
      {alert.visible && <AlertBar />}
      {props.children}
    </>
  );
};
export default Pages;

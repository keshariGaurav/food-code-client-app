import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import AlertBar from '../Components/AlertBar/AlertBar';
import MenuItemsWrapper from '../Components/MenuItemsWrapper';
import { AppDispatch, RootState } from '../redux/store';
import LoginPage from './login/LoginPage';
import VerifyLogin from './login/VerifyLogin';

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
          <Route path="/" element={<MenuItemsWrapper />} />
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

import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import AlertBar from '@/Components/AlertBar/AlertBar';
import MenuItemsWrapper from '@/Components/AllMenusWrapper';
import CartPage from '@/pages/cart/CartPage';
import LoginPage from '@/pages/login/LoginPage';
import VerifyLogin from '@/pages/login/VerifyLogin';
import MenuPage from '@/pages/menus/MenuPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import OrderPage from '@/pages/order/OrderPage';
import { AppDispatch, RootState } from '@/redux/store';

interface PageLayoutProps {
  children: ReactNode;
}

const Pages = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-login" element={<VerifyLogin />} />
          <Route path="/" element={<MenuItemsWrapper />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/order" element={<OrderPage />} />
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

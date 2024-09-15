import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { AppDispatch, RootState } from '@/redux/store';
import logoImg from '@/assets/images/logo-transparent-png.png';

const Navbar = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state: RootState) => state.cart);
  const selected = Object.keys(cartState.items).length;
  const { pathname } = useLocation();
  const goToMenu = () => {
    navigate('/');
  };
  const goToProfile = () => {
    navigate('/profile');
  };
  const profile = pathname === '/profile';

  return (
    <div className="my-2 flex w-full justify-center px-8">
      <div className="relative mb-2 flex w-full items-center justify-between sm:w-1/2 lg:w-1/2">
        {!profile && (
          <button onClick={goToProfile}>
            <span style={{ fontSize: '20px' }}>
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
        )}
        {profile && (
          <button onClick={goToMenu}>
            <span style={{ fontSize: '20px' }}>
              <i className="fa-solid fa-plate-wheat"></i>
            </span>
          </button>
        )}
        <div>
          <div style={{ width: '40px', marginLeft: 'auto', marginRight: 'auto' }}>
            <img src={logoImg} alt="Logo Image" width="100%" />
          </div>
        </div>
        <button
          onClick={() => {
            navigate('/cart');
          }}
        >
          <span style={{ fontSize: '20px' }}>
            <i className="fa-solid fa-cart-arrow-down"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

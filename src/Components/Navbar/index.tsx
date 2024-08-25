import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from '@/redux/store';

const Navbar = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state: RootState) => state.cart);
  const selected = Object.keys(cartState.items).length;

  return (
    <div className="my-2 flex w-full justify-center px-8">
      <div className="relative mb-2 flex w-full items-center justify-between sm:w-1/2 lg:w-1/2">
        <button>
          <span style={{ fontSize: '20px' }}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
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

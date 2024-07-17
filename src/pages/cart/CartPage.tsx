import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItem } from '@/redux/reducer/cartSlice';
import { AppDispatch, RootState } from '@/redux/store';
import SelectedMenuItem from '@/Components/SelectedMenuItem';
import { useNavigate } from 'react-router-dom';
import { CartState, MenuPopupState } from '@/types';
import EmptyCart from '@/Components/EmptyCart';
import CookingRequest from '@/Components/CookingRequest';

const CartPage = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state: RootState) => state.cart);
  const allSelectedItems = cartState.items;
  const [cookingRequest, setCookingRequest] = useState(false);
  function calculateTotalAmount(data: CartState): number {
    let totalAmount = 0;
    const items = data.items;
    for (const key in items) {
      totalAmount += items[key].totalAmount;
    }
    return totalAmount;
  }

  const totalAmount = calculateTotalAmount(cartState).toFixed(2);
  const handleOrder = () => {
    //Write Order logic.
  };

  if (Object.keys(allSelectedItems).length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="p-4">
      <div className={`mt-6 p-4 ${cookingRequest ? 'blur-sm' : ''}`}>
        <div className="flex items-center border-b-2 pb-2">
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            <span style={{ fontSize: '14px' }}>
              <i className="fa-solid fa-backward"></i>
            </span>
          </button>
          <div className="ml-8">
            <div className=" text-xl font-bold text-custom-green-700">
              Serving to your table in 30 mins.
            </div>
            <div className=" text-xl font-bold text-custom-green-700">Table No. 7</div>
          </div>
        </div>
        <div className="mt-6 p-4">
          {Object.keys(allSelectedItems).map((key) => {
            const item = allSelectedItems[key];
            return (
              <div className="mb-2 rounded-lg border-2 border-gray-100 p-3">
                <SelectedMenuItem menuItem={item} id={key} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between border-y-2 p-6">
          <div className="text-2xl font-bold">Add Cooking Request.</div>
          <button
            onClick={() => {
              setCookingRequest(!cookingRequest);
            }}
          >
            <span
              style={{
                fontSize: '20px',
                color: '#285E47',
              }}
            >
              <i className="fa-solid fa-circle-plus"></i>
            </span>
          </button>
        </div>
        <div className="mt-4 flex justify-between p-6">
          <button
            className="ml-auto mr-auto flex h-16 w-11/12 items-center justify-between rounded-lg border-2 border-custom-green-800 bg-custom-green-600 p-6 text-white"
            onClick={handleOrder}
          >
            <span className="flex">Total: Rs {totalAmount}</span>{' '}
            <span className="flex items-center">
              <span className="mr-2">Proceed to Pay</span>{' '}
              <span style={{ fontSize: '14px' }}>
                <i className="fa-solid fa-square-caret-right"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
      {cookingRequest && <CookingRequest setCookingRequest={setCookingRequest} />}
    </div>
  );
};

export default CartPage;

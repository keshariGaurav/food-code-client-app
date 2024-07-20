import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCookingRequest } from '@/redux/reducer/cartSlice';
import { updateItemsSelection } from '@/redux/reducer/menuPopupSlice';
import { AppDispatch, RootState } from '@/redux/store';

interface CookingRequestProps {
  setCookingRequest: React.Dispatch<React.SetStateAction<boolean>>;
}
const CookingRequest = ({ setCookingRequest }: CookingRequestProps) => {
  const dispatch: AppDispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  const [description, setDescription] = useState(cartState.cookingRequest);
  const handleClose = () => {
    setCookingRequest(false);
  };
  const handleSave = () => {
    dispatch(addCookingRequest({ request: description }));
    handleClose();
  };
  return (
    <div className="fixed bottom-0 h-2/5  rounded-t-3xl bg-white">
      <div className="relative w-screen">
        <div
          className="absolute"
          onClick={handleClose}
          style={{
            top: '-35px',
            right: '42vw',
            width: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <i
            style={{ fontSize: '36px', color: 'black' }}
            className="fa fa-times"
            aria-hidden="true"
          ></i>
        </div>
        <div className="z-10 h-5/6  w-screen overflow-scroll p-3">
          <div className="mx-2 mt-10 flex w-11/12 flex-col rounded-lg bg-white  p-6 shadow-md">
            <label
              htmlFor="description"
              className="mb-2 text-lg font-medium text-gray-900"
            >
              Cooking Request
            </label>
            <textarea
              id="description"
              name="description"
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="focus:custom-green-800 rounded-lg border border-gray-300 p-3 focus:border-transparent focus:outline-none"
              placeholder="Enter your request here..."
            />
            <button
              onClick={handleSave}
              className="mt-2 rounded-lg bg-custom-green-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-custom-green-700 focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingRequest;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { setAlert } from '../../redux/reducer/alertSlice';

const Alert = () => {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch: AppDispatch = useDispatch();

  let bgColor, borderColor, textColor, icon;
  const type = alert.type;
  const message = alert.message;
  const visible = alert.visible;
  const handleClose = () => {
    dispatch(
      setAlert({
        message: '',
        type: '',
        visible: false,
      }),
    );
  };

  setTimeout(handleClose, 3000);

  switch (type) {
    case 'success':
      bgColor = 'bg-green-100';
      borderColor = 'border-green-400';
      textColor = 'text-green-700';
      icon = '✅';
      break;
    case 'error':
      bgColor = 'bg-red-100';
      borderColor = 'border-red-400';
      textColor = 'text-red-700';
      icon = '❌';
      break;
    case 'warning':
      bgColor = 'bg-yellow-100';
      borderColor = 'border-yellow-400';
      textColor = 'text-yellow-700';
      icon = '⚠️';
      break;
    case 'info':
    default:
      bgColor = 'bg-blue-100';
      borderColor = 'border-blue-400';
      textColor = 'text-blue-700';
      icon = 'ℹ️';
      break;
  }

  return (
    <div
      className={`mb-4 flex items-center p-4 text-sm ${bgColor} border ${borderColor} rounded-lg`}
      role="alert"
    >
      <span className={`mr-3 ${textColor}`}>{icon}</span>
      <div className={`flex-1 ${textColor}`}>{message}</div>
      <button
        onClick={handleClose}
        className={`ml-3 text-sm font-medium ${textColor} hover:underline`}
      >
        Close
      </button>
    </div>
  );
};

export default Alert;

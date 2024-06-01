import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { setAlert } from '../../../redux/reducer/alertSlice';
import { AppDispatch, RootState } from '../../../redux/store';

type FormFields = {
  otp: string;
};
const VerifyLoginForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const navigate = useNavigate();
  const diner = useSelector((state: RootState) => state.diner);
  const dispatch: AppDispatch = useDispatch();

  const email = diner.email;

  const submitOTP: SubmitHandler<FormFields> = async (data) => {
    const otp = data.otp;
    try {
      const res = await axios.post('http://localhost:3100/api/v1/diner/verify-login', {
        otp,
        email,
      });
      dispatch(
        setAlert({
          message: 'Logged IN Successfully!',
          type: 'success',
          visible: true,
        }),
      );

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg border-2 border-teal-200 bg-gray-100">
      <form className="rounded bg-white p-6 shadow-md">
        <label htmlFor="otp" className="text-md mb-4 block font-bold text-gray-700">
          Enter OTP
        </label>
        <input
          type="text"
          id="otp"
          {...register('otp')}
          className="focus:shadow-outline mb-4  w-full appearance-none rounded border px-1 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          placeholder=""
          required
        />
        <button
          type="submit"
          onClick={handleSubmit(submitOTP)}
          className="focus:shadow-outline mt-4 w-full cursor-pointer rounded  bg-custom-green-500 px-4 py-2 font-bold text-white hover:bg-custom-green-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

VerifyLoginForm.propTypes = {};

export default VerifyLoginForm;

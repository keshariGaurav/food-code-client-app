import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { setDiner, updateDinerEmail } from '../../../redux/reducer/dinerSlice';
import { setAlert } from '../../../redux/reducer/alertSlice';

type FormFields = {
  email: string;
};
const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const diner = useSelector((state: RootState) => state.diner);

  const getOTP: SubmitHandler<FormFields> = async (data) => {
    const email = data.email;
    try {
      const res = await axios.post('http://localhost:3100/api/v1/diner/login', { email });
      dispatch(setDiner({ email, name: email }));
      dispatch(
        setAlert({
          message: 'Token has been sent to Email.',
          type: 'success',
          visible: true,
        }),
      );
      navigate('/verify-login');
    } catch (error) {
      console.log(error);
    }
  };
  const authLogin: SubmitHandler<FormFields> = async (data) => {
    window.open(`http://localhost:3100/api/v1/diner/auth/google`, '_self');
  };
  const guestLogin: SubmitHandler<FormFields> = async (data) => {
    try {
      const res = await axios.post('http://localhost:3100/api/v1/diner/guest-login');
      dispatch(
        setAlert({
          message: 'Logged In!',
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
        <label htmlFor="email" className="text-md mb-4 block font-bold text-gray-700">
          Enter Your Email to get OTP or Name for Guest Login
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="focus:shadow-outline mb-4  w-full appearance-none rounded border px-1 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          placeholder="Enter your email or name"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit(getOTP)}
          className="focus:shadow-outline mt-4 w-full cursor-pointer rounded  bg-custom-green-500 px-4 py-2 font-bold text-white hover:bg-custom-green-700 focus:outline-none"
        >
          Get OTP
        </button>
        <button
          type="submit"
          onClick={handleSubmit(authLogin)}
          className="focus:shadow-outline mt-4 w-full cursor-pointer rounded  bg-red-500 px-4 py-2 font-bold text-white hover:bg-custom-green-700 focus:outline-none"
        >
          Sign In as Google
        </button>
        <button
          type="submit"
          onClick={handleSubmit(guestLogin)}
          className="focus:shadow-outline mt-4 w-full cursor-pointer rounded  bg-blue-500 px-4 py-2 font-bold text-white hover:bg-custom-green-700 focus:outline-none"
        >
          Guest Login
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;

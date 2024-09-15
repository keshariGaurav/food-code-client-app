import PropTypes from 'prop-types';
import React from 'react';

import LoginForm from '@/Components/forms/LoginForm';
import logoImg from '@/assets/images/logo-transparent-png.png';

const LoginPage = () => {
  return (
    <div className="h-screen w-full bg-custom-green-50 p-10">
      <div style={{ width: '120px', marginLeft: 'auto', marginRight: 'auto' }}>
        <img src={logoImg} alt="Logo Image" width="100%" />
      </div>
      <h3 className="mb-5 mt-2 text-center text-2xl font-bold">
        Welcome to Eazy Eats Cafe
      </h3>
      <LoginForm />
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;

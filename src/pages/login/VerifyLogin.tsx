import React from 'react';
import PropTypes from 'prop-types';
import VerifyLoginForm from '../../Components/forms/VerifyLoginForm';

const VerifyLogin = () => {
  return (
    <div className="h-screen w-full bg-custom-green-50 p-10">
      <h3 className="mb-5 text-center text-2xl">Welcome to TechnoSoft Cafe</h3>
      <VerifyLoginForm />
    </div>
  );
};

VerifyLogin.propTypes = {};

export default VerifyLogin;

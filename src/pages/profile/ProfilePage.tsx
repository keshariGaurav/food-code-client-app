import React from 'react';
import axios from 'axios';
import Navbar from '@/Components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const goToOrder = ()=>{
    navigate('/order')
  }
  const goToEditProfile = () => {
    navigate('/edit-profile');
  };
  const handleLogout = async ()=>{
    await axios.post('http://localhost:3100/api/v1/diner/logout', {});
    navigate('/login')
  }

  return (
    <div className="h-screen w-full bg-custom-green-50 p-10">
      <Navbar />
      <div className="mt-12 w-full rounded-lg bg-white p-6 py-12 shadow-md">
        <div className="flex flex-col items-center">
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">John Doe</h2>
          <p className="mt-1 text-sm text-gray-500">johndoe@example.com</p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            className="w-full rounded-lg bg-custom-green-400 px-4 py-3 text-left text-white shadow-sm hover:cursor-pointer hover:bg-custom-green-600"
            onClick={goToOrder}
          >
            <div className="flex items-center">
              <i className="fa-solid fa-utensils"></i>{' '}
              <span className="ml-4 flex">View Orders</span>
            </div>
          </button>
          <button
            className="w-full rounded-lg bg-custom-green-400 px-4 py-3 text-left text-white shadow-sm hover:cursor-pointer hover:bg-custom-green-600"
            onClick={goToEditProfile}
          >
            <div className="flex items-center">
              <i className="fa-regular fa-user"></i>{' '}
              <span className="ml-4 flex">Edit Profile</span>
            </div>
          </button>
          <button className="w-full rounded-lg bg-custom-green-400 px-4 py-3 text-left text-white shadow-sm hover:cursor-pointer hover:bg-custom-green-600" onClick={handleLogout}>
            <div className="flex items-center">
              <i className="fa-solid fa-right-from-bracket"></i>{' '}
              <span className="ml-4 flex">Logout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-red-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Loading your delicious food...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

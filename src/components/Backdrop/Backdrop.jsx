import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700 opacity-75">
      <LoadingSpinner />
      <h2 className="text-center text-xl font-semibold text-white">
        Loading...
      </h2>
      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default Backdrop;

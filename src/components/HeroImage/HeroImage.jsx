import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';

const HeroImage = ({ title, greeting = 'Start your epic journey here' }) => {
  return (
    <div className="relative mb-10 h-96 w-full overflow-hidden bg-[url('/emporium-quest-final.png')] bg-cover bg-center p-12 text-center">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black/[.7] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="text-purple-700">
            <h1 className="mb-4 text-4xl font-semibold">{title}</h1>
            <h2 className="mb-6 text-xl font-semibold">{greeting}</h2>
            {/* <button
              type="button"
              className="inline-flex rounded border-2 border-purple-300 px-7 pt-[10px] pb-[8px] text-sm font-medium uppercase leading-normal text-purple-300 transition duration-150 ease-in-out hover:border-purple-300 hover:bg-purple-500 hover:bg-opacity-10 hover:text-purple-300 focus:border-purple-300 focus:text-purple-300 focus:outline-none focus:ring-0 active:border-purple-200 active:text-purple-200 dark:hover:bg-purple-300 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <BeakerIcon className="mr-1 h-5 w-5 text-indigo-600" />
              Explorar
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

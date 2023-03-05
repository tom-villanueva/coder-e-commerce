import React from 'react';
import { appRoutes } from '../../AppRoutes';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="shrink-0 bg-purple-300 py-2 px-6">
      <div className="flex items-center justify-between">
        <Link to={appRoutes.home}>
          <img
            className="h-20"
            src="/logo-no-background.png"
            alt="quester's emporium logo icon"
          />
        </Link>
        <h4 className="text-purple-700">Quester's Emporium</h4>
      </div>
    </div>
  );
};

export default Footer;

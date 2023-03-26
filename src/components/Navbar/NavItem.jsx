import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ children = '', icon, path = '/' }) => {
  const location = useLocation();

  const onRouteClassName =
    location.pathname === path
      ? 'underline underline-offset-8 decoration-4'
      : '';

  return (
    <Link to={path} className="cursor-pointer">
      <div
        className={`${onRouteClassName} flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-indigo-600 hover:opacity-75`}
      >
        {icon}
        <span className="ml-2">{children}</span>
      </div>
    </Link>
  );
};

export default NavItem;

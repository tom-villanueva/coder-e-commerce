import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ children = '', icon, path = '/' }) => {
  return (
    <Link to={path} className="cursor-pointer">
      <div className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-indigo-600 hover:opacity-75">
        {icon}
        <span className="ml-2">{children}</span>
      </div>
    </Link>
  );
};

export default NavItem;

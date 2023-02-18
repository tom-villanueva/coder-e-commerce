import React from 'react';

const NavItem = ({ children = '', icon }) => {
  return (
    <li className="cursor-pointer">
      <a className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-indigo-600 hover:opacity-75">
        {icon}
        <span className="ml-2">{children}</span>
      </a>
    </li>
  );
};

export default NavItem;

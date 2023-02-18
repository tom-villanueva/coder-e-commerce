import React, { useState } from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import NavItem from './NavItem';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadowlg sticky mb-3 flex flex-wrap items-center justify-between bg-purple-300 px-2 py-3 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo and hamburger button */}
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <a href="/">
            <img
              className="h-20"
              src="/logo-no-background.png"
              alt="quester's emporium logo icon"
            />
          </a>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <Bars3BottomRightIcon className="h-6 w-6 text-indigo-800" />
          </button>
        </div>
        {/* Logo and hamburger button */}
        {/* List items */}
        <div
          className={
            'flex-grow items-center lg:flex' + (open ? ' flex' : ' hidden')
          }
        >
          <ul className="flex list-none flex-col lg:m-auto lg:flex-row lg:items-center lg:space-x-4">
            {items.map(item => (
              <NavItem icon={item.icon}>{item.text}</NavItem>
            ))}
            {/* Shopping cart */}
            <CartWidget />
            {/* Shopping cart */}
          </ul>
        </div>
        {/* List items */}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Outlet } from 'react-router-dom';
import navbarItems from '../../NavbarItems';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar items={navbarItems} />
      <main className="flex shrink-0 grow basis-auto items-center justify-center bg-slate-200 pb-4 pt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />  {/* This is where the matched child route will be rendered */}
      <Footer />
    </div>
  );
};

export default Layout;

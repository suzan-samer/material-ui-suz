import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
    <header>My Header</header>

    <Outlet />
    </>

  );
}

export default Root;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Preview from './Preview';

const CusRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/preview' element={<Preview />} />
    </Routes>
  );
};

export default CusRoutes;

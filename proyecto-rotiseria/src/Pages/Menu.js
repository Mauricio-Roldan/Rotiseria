
import React from 'react';
import "../App.css";
import Products from '../components/Products/Products';

const Menu = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Products/>
    </div>
  );
};

export default Menu;
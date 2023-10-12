import React from 'react';

const CartWidget = () => {
  return (
    <a href="#cart" className="nav-link">
      <i className="bi bi-cart"></i>
      <span className="badge bg-primary">3</span>
    </a>
  );
};

export default CartWidget;

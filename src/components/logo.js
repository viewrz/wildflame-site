import React from 'react';
import flameWhite from '../img/flame-white.png';

export default () =>
  <div className="logo">
    <div className="img-container">
      <img alt="" src={flameWhite} />
    </div>
    <div className="brand-name">
      <span>wild</span>
      <span className="flame">flame</span>
      <span className="extension">.co</span>
    </div>
  </div>;

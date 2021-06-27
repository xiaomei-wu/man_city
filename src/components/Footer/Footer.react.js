import React from 'react';
import { CityLogo } from '../utils/tools';

export const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link linkTo="/" width="70px" height="70px" />
      </div>
      <div className="footer_discl">
        Manchester city 2021 all rights reserved.
      </div>
    </footer>
  );
};

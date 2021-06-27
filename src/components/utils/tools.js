import React from 'react';
import { Link } from 'react-router-dom';

import McityLogo from '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = ({ width, height, link, linkTo }) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width,
        height,
        background: `url(${McityLogo}) no-repeat`,
      }}
    />
  );
  if (link) {
    return (
      <Link className="link_logo" to={linkTo}>
        {template}
      </Link>
    );
  }
  return template;
};

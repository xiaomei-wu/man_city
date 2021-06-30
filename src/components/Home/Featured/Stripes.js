import React from 'react';

import { Animate } from 'react-move';
import { easePolyOut } from 'd3-ease';

const stripesState = [
  {
    id: '18177171',
    background: '#98c5e9',
    left: 120,
    rotate: 25,
    top: -260,
    delay: 0,
  },
  {
    id: '18772772',
    background: '#ffffff',
    left: 360,
    rotate: 25,
    top: -394,
    delay: 200,
  },
  {
    id: '161515189',
    background: '#98c5e9',
    left: 600,
    rotate: 25,
    top: -498,
    delay: 400,
  },
];

export const Stripes = () => {
  const handleShowStripes = () =>
    stripesState.map(stripe => (
      <Animate
        key={stripe.id}
        show
        start={{
          background: '#ffffff',
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0,
        }}
        enter={{
          background: `${stripe.background}`,
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: {
            delay: stripe.delay,
            duration: 200,
            ease: easePolyOut,
          },
        }}
      >
        {({ opacity, left, rotate, top, background }) => (
          <div
            className="stripe"
            style={{
              background,
              opacity,
              transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`,
            }}
          />
        )}
      </Animate>
    ));
  return <div className="featured_stripes">{handleShowStripes()}</div>;
};

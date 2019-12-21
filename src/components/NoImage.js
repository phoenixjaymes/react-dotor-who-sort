import React from 'react';
import PropTypes from 'prop-types';

const NoImage = ({ name }) => (
  <div className="">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gradient">
          <stop offset="0%" stopColor="#000" />
          <stop offset="50%" stopColor="#000" />
          <stop offset="100%" stopColor="#b00" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#gradient)" style={{ strokeWidth: 2, stroke: 'rgb(0,0,0)' }} />
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="1.75rem" fontFamily="Arial, Helvetica, sans-serif">{name}</text>
    </svg>
  </div>
);

NoImage.propTypes = {
  name: PropTypes.string,
};

export default NoImage;

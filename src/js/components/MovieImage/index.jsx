import React from 'react';

const imagePath = 'https://image.tmdb.org/t/p/w500_and_h282_face/';

const MovieImage = ({ image }) => (
  <img src={`${imagePath}${image}`} alt='' />
);

export default MovieImage;

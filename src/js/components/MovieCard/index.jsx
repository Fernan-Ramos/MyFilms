import React from 'react';
import classNames from 'classnames';
import MovieImage from '../MovieImage';
import './style.scss';

const MovieCard = ({ movie, imageSize, className }) => (
  <div className={classNames('MovieCard', className)}>
    <MovieImage image={movie.poster_path} size={imageSize} />
    <span>{movie.title}</span>
  </div>
);


export default MovieCard;

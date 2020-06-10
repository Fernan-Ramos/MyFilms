import React from 'react';
import classNames from 'classnames';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MovieImage from '../MovieImage';
import './style.scss';

const MovieCard = ({ movie, imageSize, className, isClearable, onDelete }) => (
  <div className={classNames('MovieCard', className)}>
    <MovieImage image={movie.poster_path} size={imageSize} />
    <span>{movie.title}</span>
    {isClearable && (
      <button className="delete-icon" onClick={onDelete} type="button">
        <DeleteOutlineOutlinedIcon style={{ color: '#b19fd8' }} />
      </button>
    )}
  </div>
);

export default MovieCard;

import React from 'react';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import './style.scss';

const UpcomingList = ({ items }) => (
  <div className="UpcomingList">
    <div className="UpcomingList__title">Upcoming</div>
    <div className="UpcomingList__items">
      {items.map((item, index) => (
        <Link to={`${routeCodes.FILM}/${item.id}`} key={index}>
          <MovieCard className="TextOutside" movie={item} imageSize="xl" />
        </Link>
      ))}
    </div>
  </div>
);

export default UpcomingList;

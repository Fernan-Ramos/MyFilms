import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import { routeCodes } from 'constants/routes';
import UpcomingList from './UpcomingList';

const View = ({ trendingItems }) => {
  return (
    <div className="TrendingWrapper">
      <div className="Trending">
        {trendingItems.slice(0, 3).map((item, index) => (
          <Link to={`${routeCodes.FILM}/${item.id}`} key={index}>
            <MovieCard className="TextInside" movie={item} imageSize="poster" />
          </Link>
        ))}
      </div>
      <div className="Upcoming">
        <UpcomingList items={trendingItems.slice(3, -1)} />
      </div>
    </div>
  );
};

export default View;

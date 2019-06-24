import React from 'react';
import MovieCard from 'js/components/MovieCard';
import './style.scss';

const UpcomingList = ({items}) => (
  <div className='UpcomingList'>
    <div className='UpcomingList__title'>Upcoming</div>
    <div className='UpcomingList__items'>
      {items.map((item, index) => (
        <MovieCard
          className='TextOutside'
          key={index}
          movie={item}
          imageSize="xl"
        />
      ))}
    </div>
  </div>
);

export default UpcomingList;

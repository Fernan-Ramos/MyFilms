import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending } from 'redux/lists/actions';
import { getTrendingItems } from 'redux/lists/selectors';
import View from './view';
import './style.scss';

const Trending = () => {
  const dispatch = useDispatch();
  const trendingItems = useSelector(getTrendingItems);
  useEffect(() => {
    dispatch(fetchTrending());
  }, []);

  return <View trendingItems={trendingItems} />;
};

export default Trending;

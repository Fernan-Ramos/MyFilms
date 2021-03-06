import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'components/Utils/Loader';
import { getQueue } from 'redux/app/selectors';
import './style.scss';

const AsyncManager = () => {
  const loadingQueue = useSelector(getQueue);
  if (loadingQueue === 0) return null;
  return (
    <div className="AsyncManager">
      <Loader className="AsyncManager__loading" />
    </div>
  );
};

export default AsyncManager;

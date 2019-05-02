import React from 'react';
import classNames from 'classnames';
import './style.scss';

const Loader = ({ className }) => (
  <div className={classNames('Loader', className)}>
    <svg className='Spinner' width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
      <circle className='path' fill='none' strokeWidth='6' strokeLinecap='round' cx='33' cy='33' r='30' />
    </svg>
  </div>
);

export default Loader;

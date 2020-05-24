import React from 'react';
import './style.scss';

const Latest = ({ latest }) => (
  <>
    {latest && (
      <div className="Latest">
        <div className="Latest__title">What's New</div>
        <div className="Latest__movie">
          <div className="Latest__video">
            <div className="Latest__title">{latest.title}</div>
          </div>
          <div className="Latest__overview">{latest.overview}</div>
        </div>
      </div>
    )}
  </>
);

export default Latest;

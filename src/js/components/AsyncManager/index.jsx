import React from 'react';
import { connect } from 'react-redux';
import Loader from 'js/components/Utils/Loader';

import './style.scss';

const AsyncManager = ({ loadingQueue }) => {
  if (loadingQueue === 0) return null;
  return (
    <div className="AsyncManager">
      <Loader className="AsyncManager__loading" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loadingQueue: state.app.get('queue'),
});

export default connect(mapStateToProps, null)(AsyncManager);

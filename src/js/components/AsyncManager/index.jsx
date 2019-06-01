import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'js/components/Utils/Loader';

import './style.scss';

class AsyncManager extends PureComponent {
    static propTypes = {
      loadingQueue: PropTypes.number,
    }

    render() {
      const { loadingQueue } = this.props;
      if (loadingQueue === 0) return null;
      return (
        <div className='AsyncManager'>
          <Loader className='AsyncManager__loading' />
        </div>
      );
    }
}

const mapStateToProps = state => ({
  loadingQueue: state.async.get('queue')
});

export default connect(mapStateToProps, null)(AsyncManager);

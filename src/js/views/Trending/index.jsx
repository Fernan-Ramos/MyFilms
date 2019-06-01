import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TrendingService from 'js/services/api/TrendingService';
import { addList } from 'js/actions/lists';

class Trending extends PureComponent {
  componentWillMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies = async () => {
    const { setTrendingList } = this.props;
    try {
      const trendingList = await TrendingService.list();
      setTrendingList(trendingList, 'trendingList');
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { trendingItems } = this.props;
    return (
      <div>
        {trendingItems.map((item, index) => (
          <div key={index}>
            {item.title}
          </div>
        ))
      }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTrendingList: (trendingList, id) => dispatch(addList(trendingList, id)),
});

const mapStateToProps = state => ({
  trendingItems: state.lists.get('trendingList').get('items'),
});


export default connect(mapStateToProps, mapDispatchToProps)(Trending);

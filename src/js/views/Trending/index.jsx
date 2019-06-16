import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TrendingService from 'js/services/api/TrendingService';
import { addList } from 'js/actions/lists';
import { addAsync, deleteAsync } from 'js/actions/async';
import MovieCard from 'js/components/MovieCard';
import './style.scss';


class Trending extends PureComponent {
  componentWillMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies = async () => {
    const {
      setTrendingList,
      addAsyncFunction,
      deleteAsyncFunction
    } = this.props;
    try {
      addAsyncFunction();
      const trendingList = await TrendingService.list();
      setTrendingList(trendingList, 'trendingList');
    } catch (error) {
      console.error(error);
    }
    deleteAsyncFunction();
  };

  render() {
    const { trendingItems } = this.props;
    return (
      <div className='TrendingWrapper'>
        <div className="Trending">
          {trendingItems.slice(0, 3).map((item, index) => (
            <MovieCard
              className='TextInside'
              key={index}
              movie={item}
              imageSize="poster"
            />
          ))}
        </div>
        <div className="Upcoming">
          <div>
            <div className='Upcoming__title'>Upcoming</div>
            <div className='Upcoming__items'>
              {trendingItems.slice(3, 11).map((item, index) => (
                <MovieCard
                  className='TextOutside'
                  key={index}
                  movie={item}
                  imageSize="xl"
                />
              ))}
            </div>
          </div>
          <div className="" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTrendingList: (trendingList, id) => dispatch(addList(trendingList, id)),
  addAsyncFunction: () => dispatch(addAsync('trending')),
  deleteAsyncFunction: () => dispatch(deleteAsync('trending'))
});

const mapStateToProps = state => ({
  trendingItems: state.lists.get('trendingList').get('items')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);

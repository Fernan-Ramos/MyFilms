import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TrendingService from 'services/api/TrendingService';
import { addList } from 'redux/lists/actions';
import { addAsync, deleteAsync } from 'redux/app/actions';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import UpcomingList from './UpcomingList';
import './style.scss';

class Trending extends PureComponent {
  componentWillMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { addAsyncFunction, deleteAsyncFunction } = this.props;
    addAsyncFunction();
    await this.getTrendingMovies();
    deleteAsyncFunction();
  };

  getTrendingMovies = async () => {
    const { setTrendingList } = this.props;
    try {
      const trendingList = await TrendingService.list();
      setTrendingList(trendingList, 'trendingList');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { trendingItems } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTrendingList: (trendingList, id) => dispatch(addList(trendingList, id)),
  addAsyncFunction: () => dispatch(addAsync('trending')),
  deleteAsyncFunction: () => dispatch(deleteAsync('trending')),
});

const mapStateToProps = (state) => ({
  trendingItems: state.lists.trendingList.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);

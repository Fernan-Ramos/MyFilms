import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TrendingService from 'js/services/api/TrendingService';
import LatestService from 'js/services/api/LatestService';
import { addList } from 'js/actions/lists';
import { addLatest } from 'js/actions/latest';
import { addAsync, deleteAsync } from 'js/actions/async';
import MovieCard from 'js/components/MovieCard';
import { Link } from 'react-router-dom';
import { routeCodes } from 'js/constants/routes';
import UpcomingList from './UpcomingList';
import './style.scss';


class Trending extends PureComponent {
  componentWillMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      addAsyncFunction,
      deleteAsyncFunction,
    } = this.props;
    addAsyncFunction();
    await this.getTrendingMovies();
    // await this.getLatestMovie();
    deleteAsyncFunction();
  }

  getLatestMovie = async () => {
    const {
      setLatestMovie,
    } = this.props;
    try {
      const latestMovie = await LatestService.list();
      setLatestMovie(latestMovie);
    } catch (error) {
      console.error(error);
    }
  }

  getTrendingMovies = async () => {
    const {
      setTrendingList,
    } = this.props;
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
      <div className='TrendingWrapper'>
        <div className="Trending">
          {trendingItems.slice(0, 3).map((item, index) => (
            <Link to={`${routeCodes.FILM}/${item.id}`} key={index}>
              <MovieCard
                className='TextInside'
                movie={item}
                imageSize="poster"
              />
            </Link>
          ))}
        </div>
        <div className="Upcoming">
          <UpcomingList
            items={trendingItems}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTrendingList: (trendingList, id) => dispatch(addList(trendingList, id)),
  addAsyncFunction: () => dispatch(addAsync('trending')),
  deleteAsyncFunction: () => dispatch(deleteAsync('trending')),
  setLatestMovie: latestMovie => dispatch(addLatest(latestMovie))
});

const mapStateToProps = state => ({
  trendingItems: state.lists.get('trendingList').get('items'),
  latestMovie: state.latest.get('latestMovie')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TrendingService from 'js/services/api/TrendingService';
import { addList } from 'js/actions/lists';
import { addAsync, deleteAsync } from 'js/actions/async';
import MovieImage from 'js/components/MovieImage';
import './style.scss';

class Trending extends PureComponent {
  componentWillMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies = async () => {
    const { setTrendingList, addAsyncFunction, deleteAsyncFunction } = this.props;
    try {
      addAsyncFunction();
      const trendingList = await TrendingService.list();
      setTrendingList(trendingList, 'trendingList');
    } catch (error) {
      console.error(error);
    }
    deleteAsyncFunction();
  }


  render() {
    const { trendingItems } = this.props;
    const MovieCard = ({ movie }) => (
      <div className='MovieCard'>
        <MovieImage
          image={movie.poster_path}
        />
        <span>{movie.title}</span>
      </div>
    );


    return (
      <div className='Trending'>
        {trendingItems.map((item, index) => (
          <MovieCard
            key={index}
            movie={item}
          />

        ))
      }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTrendingList: (trendingList, id) => dispatch(addList(trendingList, id)),
  addAsyncFunction: () => dispatch(addAsync('trending')),
  deleteAsyncFunction: () => dispatch(deleteAsync('trending')),
});

const mapStateToProps = state => ({
  trendingItems: state.lists.get('trendingList').get('items'),
});


export default connect(mapStateToProps, mapDispatchToProps)(Trending);

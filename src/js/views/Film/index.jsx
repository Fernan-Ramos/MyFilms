import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addAsync, deleteAsync } from 'js/redux/actions/async';
import MovieImage from 'js/components/MovieImage';
import MovieService from '../../services/api/MovieService';
import './style.scss';

const GenresList = ({ genres }) => (
  <div className="FilmDetail__genres">
    {genres && genres.map(genre => genre.name).join(', ')}
  </div>
);


const Film = ({
  match: {
    params: { id }
  },
  addAsyncFunction,
  deleteAsyncFunction,
  isMobile
}) => {
  const [film, setFilm] = useState({});
  useEffect(() => {
    async function fetchData() {
      addAsyncFunction();
      const response = await MovieService.detail(id);
      setFilm(response);
      deleteAsyncFunction();
    }
    fetchData();
  }, [id]);
  return (
    <>
      <div className="FilmDetail">
        <div className="FilmDetail__image MovieCard">
          <MovieImage image={film.poster_path} size="xl" />
        </div>
        <div className="FilmDetail__text">
          <h2 className="FilmDetail__title">{film.title}</h2>
          <GenresList genres={film.genres} />
          {!isMobile && <p className="FilmDetail__overview">{film.overview}</p>}
          <div className="FilmDetail__average">{film.vote_average}</div>
        </div>
      </div>
      {isMobile && <p className="FilmDetail__overview">{film.overview}</p>}
    </>
  );
};


const mapStateToProps = state => ({
  isMobile: state.layout.get('isMobile')
});

const mapDispatchToProps = dispatch => ({
  addAsyncFunction: () => dispatch(addAsync('film')),
  deleteAsyncFunction: () => dispatch(deleteAsync('film'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Film);

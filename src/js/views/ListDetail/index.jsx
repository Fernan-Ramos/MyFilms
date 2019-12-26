import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieCard from 'js/components/MovieCard';
import './style.scss';
import { Link } from 'react-router-dom';
import { routeCodes } from '../../constants/routes';

const ListDetail = ({
  match: {
    params: { id }
  },
  myLists
}) => {
  const [list, setList] = useState({});
  useEffect(() => {
    function getList() {
      const newList = { ...myLists.find(item => item.id === id) };
      const filmsRefactored = newList.films.map(item => ({
        poster_path: item.poster,
        id: item.value,
        title: item.label
      }));
      newList.films = filmsRefactored;
      setList(newList);
    }
    getList();
  }, [id]);
  return (
    <div className="ListDetail">
      <div className="ListDetail__grid">
        {list.films
        && list.films.map((item, index) => (
          <Link to={`${routeCodes.FILM}/${item.id}`} key={index}>
            <MovieCard className="TextOutside" movie={item} imageSize="xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  myLists: state.firebaseLists.myLists
});

export default connect(mapStateToProps, null)(ListDetail);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from 'js/components/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { routeCodes } from '../../constants/routes';
import { fetchDeleteFirebaseList } from '../../redux/actions/firebase/lists';
import routeManager from '../../services/routeManager';


import './style.scss';
import Button from '../../components/Button';

const ListDetail = ({
  match: {
    params: { id }
  },
  myLists,
  deleteList
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
  const handleOnClick = () => {
    deleteList(list.id, 'myLists');
    routeManager.push(routeCodes.LISTS);
  };
  return (
    <div className="ListDetail">
      <div className="ListDetail__header">
        <Button>
          <FontAwesomeIcon icon={faEdit} color="#443a5a" size="lg" />
        </Button>
        <Button onClick={handleOnClick}>
          <FontAwesomeIcon icon={faTrashAlt} color="#443a5a" size="lg" />
        </Button>

      </div>
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

const mapDispatchToProps = dispatch => ({
  deleteList: (listID, listName) => dispatch(fetchDeleteFirebaseList(listID, listName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDetail);

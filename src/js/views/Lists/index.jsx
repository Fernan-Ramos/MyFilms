import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'js/components/Firebase';
import { Link } from 'react-router-dom';
import Button from 'js/components/Button';
import routeManager from 'js/services/routeManager';
import firebaseLists from 'js/constants/firebaseLists';
import { routeCodes } from 'js/constants/routes';
import MovieImage from 'js/components/MovieImage';
import { fetchGetLists } from 'js/redux/firebase/actions';

import './style.scss';


const Lists = ({ fetchList, lists }) => {
  useEffect(() => {
    if (lists.length === 0) {
      fetchList(firebaseLists.MYLISTS);
    }
  }, []);

  const handleOnClick = () => {
    routeManager.push(routeCodes.CREATE_LIST);
  };
  return (
    <>
      <div className="CreateListButton">
        <Button className="basic" onClick={handleOnClick}>
          <span>Crear lista</span>
        </Button>
      </div>
      <div className="MyLists">
        <div className="MyLists__title">
          <span> Mis listas</span>
        </div>
        <div className="MyLists__grid">
          {lists.map((item, index) => (
            <Link to={`${routeCodes.LISTS}/${item.id}`} key={index}>
              <div className="ListCard">
                <div className="ListCard__image">
                  {item.image ? (
                    <img src={item.image} alt="" />
                  ) : (
                    <MovieImage size="xl" image={item.films[0].poster} />
                  )}
                </div>
                <div className="ListCard__body">
                  <div className="ListCard__title">{item.name}</div>
                  <div className="ListCard__description">{item.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchList: listName => dispatch(fetchGetLists(listName)),
});

const mapStateToProps = state => ({
  lists: state.firebase.myLists,
});

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Lists));

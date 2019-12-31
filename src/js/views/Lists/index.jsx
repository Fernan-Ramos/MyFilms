import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'js/components/Firebase';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import routeManager from '../../services/routeManager';
import firebaseLists from '../../constants/firebaseLists';
import { routeCodes } from '../../constants/routes';
import MovieImage from '../../components/MovieImage';
import { fetchFirebaseList } from '../../redux/actions/firebase/lists';

import './style.scss';


const Lists = ({ fetchList, lists }) => {
  useEffect(() => {
    if (lists.length === 0) {
      fetchList(firebaseLists.MYLISTS);
    }
  }, []);

  const handleOnClick = () => {
    routeManager.push(routeCodes.CREATELIST);
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
  fetchList: listName => dispatch(fetchFirebaseList(listName)),
});

const mapStateToProps = state => ({
  lists: state.firebaseLists.myLists,
});

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Lists));

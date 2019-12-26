import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'js/components/Firebase';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import routeManager from '../../services/routeManager';
import firebaseLists from '../../constants/firebaseLists';
import { routeCodes } from '../../constants/routes';
import MovieImage from '../../components/MovieImage';
import { addFirebaseList } from '../../redux/actions/firebase/lists';

import './style.scss';


const Lists = ({ firebase, addList, lists }) => {
  useEffect(() => {
    async function getLists() {
      const user = firebase.asd();
      const listReponse = [];
      if (lists.length === 0) {
        try {
          const response = await firebase
            .lists()
            .where('author', '==', user.uid)
            .get();
          response.forEach((doc) => {
            listReponse.push({ ...doc.data(), id: doc.id });
          });
          addList(listReponse, firebaseLists.MYLISTS);
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      }
    }
    getLists();
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
  addList: (list, id) => dispatch(addFirebaseList(list, id)),
});

const mapStateToProps = state => ({
  lists: state.firebaseLists.myLists,
});

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Lists));

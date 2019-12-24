import React, { useState, useEffect } from 'react';
import { withFirebase } from 'js/components/Firebase';
import Button from '../../components/Button';
import routeManager from '../../services/routeManager';
import { routeCodes } from '../../constants/routes';
import './style.scss';
import MovieImage from '../../components/MovieImage';

const Lists = ({ firebase }) => {
  const [lists, setLists] = useState([]);
  const getLists = async () => {
    const user = firebase.asd();
    try {
      const response = await firebase
        .lists()
        .where('author', '==', user.uid)
        .get();
      response.forEach((doc) => {
        // eslint-disable-next-line no-shadow
        setLists(lists => [...lists, doc.data()]);
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  useEffect(() => {
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
            <div className="ListCard" key={index}>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default withFirebase(Lists);

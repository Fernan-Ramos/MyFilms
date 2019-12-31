import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'js/components/Firebase';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FilmSelect from '../../components/FilmSelect';

import routeManager from '../../services/routeManager';
import { routeCodes } from '../../constants/routes';
import './style.scss';
import { fetchFirebaseListItem } from '../../redux/actions/firebase/lists';
import firebaseLists from '../../constants/firebaseLists';

const initialState = {
  name: '',
  description: '',
  image: '',
  films: []
};

const CreateList = ({ firebase, fetchListItem }) => {
  const [values, setValues] = useState(initialState);

  const createList = async (list) => {
    const listObject = { ...list, author: firebase.currentUser().uid };
    fetchListItem(listObject, firebaseLists.MYLISTS);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createList(values);
    routeManager.push(routeCodes.LISTS);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleFilmOnChange = (films) => {
    setValues({ ...values, films });
  };
  const hanldeImageOnChange = async (event) => {
    const { ref } = firebase;
    const file = event.target.files[0];
    const name = `${+new Date()}-${file.name}`;
    const metadata = { contentType: file.type };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {
        setValues({ ...values, image: url });
      })
      .catch(console.error);
  };

  return (
    <div className="CreateList">
      <form className="CreateList__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={values.name}
          placeholder="Nombre"
          name="name"
          onChange={handleOnChange}
          required
        />
        <Input
          type="text"
          placeholder="Descripción"
          name="description"
          value={values.description}
          onChange={handleOnChange}
        />
        <Input
          type="file"
          placeholder="Imagen"
          name="image"
          value={values.description}
          onChange={hanldeImageOnChange}
        />
        <FilmSelect placeholder="Añadir pelicula" onChange={handleFilmOnChange} isMulti />
        <Button className="basic" type="submit">
          <span>Create</span>
        </Button>
      </form>
    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  fetchListItem: (list, listName) => dispatch(fetchFirebaseListItem(list, listName)),
});


export default connect(null, mapDispatchToProps)(withFirebase(CreateList));

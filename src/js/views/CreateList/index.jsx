import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'js/components/Firebase';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FilmSelect from '../../components/FilmSelect';
import './style.scss';
import routeManager from '../../services/routeManager';
import { routeCodes } from '../../constants/routes';


const initialState = {
  name: '',
  description: '',
  image: '',
  films: []
};

const CreateList = ({ firebase }) => {
  const [values, setValues] = useState(initialState);

  const createList = async ({
    name, description, image, films
  }) => {
    const user = firebase.asd();
    try {
      const response = await firebase.lists().add({
        name, description, films, image, author: user.uid
      });
      console.log('Document written with ID: ', response.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
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
  const handleFilmOnChange = (film) => {
    setValues({ ...values, films: [...values.films, film] });
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
        <FilmSelect placeholder="Añadir peli" onChange={handleFilmOnChange} />

        {values.films.length > 0 && (
        <div className="CreateList__films-wrapper">
          {values.films.map((item, index) => (
            <div key={index} className="CreateList__film">
              {item.label}
            </div>
          ))}
        </div>
        )}
        <Button className="basic" type="submit">
          <span>Create</span>
        </Button>
      </form>
    </div>

  );
};

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(CreateList));

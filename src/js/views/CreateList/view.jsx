import React from 'react';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import FilmSelect from 'js/components/FilmSelect';
import './style.scss';

const View = ({
  handleSubmit,
  values,
  handleOnChange,
  handleImageOnChange,
  handleFilmOnChange,
  isEdit,
}) => (
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
      <Input type="file" placeholder="Imagen" name="image" onChange={handleImageOnChange} />
      <FilmSelect
        placeholder="Añadir pelicula"
        onChange={handleFilmOnChange}
        options={values.films}
        isMulti
      />
      <Button className="basic" type="submit">
        <span>{isEdit ? 'Guardar cambios' : 'Crear'}</span>
      </Button>
    </form>
  </div>
);

export default View;

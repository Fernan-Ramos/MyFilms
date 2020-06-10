import React from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import FilmSelect from 'components/FilmSelect';
import MovieCard from 'components/MovieCard';
import Image from 'assets/img/login/movies-2.png';
import './style.scss';

const View = ({
  handleSubmit,
  values,
  handleOnChange,
  handleImageOnChange,
  handleFilmOnChange,
  isEdit,
  handleDeleteFilm,
}) => (
  <div className="CreateList">
    <form className="CreateList__form" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={values.name}
        placeholder="Nombre"
        name="name"
        label="Nombre"
        onChange={handleOnChange}
        required
      />
      <Input
        type="text"
        label="Descripción"
        placeholder="Descripción"
        name="description"
        value={values.description}
        onChange={handleOnChange}
      />
      <Input
        type="file"
        placeholder="Imagen"
        name="image"
        onChange={handleImageOnChange}
        label="Imagen"
      />
      <FilmSelect
        placeholder="Añadir pelicula"
        onChange={handleFilmOnChange}
        options={values.films}
        value={null}
        label="Peliculas"
      />
      <Button className="basic" type="submit">
        <span>{isEdit ? 'Guardar cambios' : 'Crear'}</span>
      </Button>
    </form>

    <div className="CreateList__movies">
      {values.films.length < 1 && (
        <div className="image-default">
          <img src={Image} alt="default" />
        </div>
      )}
      {values.films.map((item) => (
        <div className="movie" key={item.value}>
          <MovieCard
            className="TextOutside"
            movie={{ poster_path: item.poster, title: item.label }}
            imageSize="xl"
            isClearable
            onDelete={() => handleDeleteFilm(item.value)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default View;

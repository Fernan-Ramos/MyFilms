import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirebase } from 'components/Firebase';
import routeManager from 'services/routeManager';
import { routeCodes } from 'constants/routes';
import { fetchCreateList, fetchEditList } from 'redux/firebase/actions';
import firebaseLists from 'constants/firebaseLists';
import { getFirebaseLists } from 'redux/firebase/selectors';

import View from './view';

const initialState = {
  name: '',
  description: '',
  image: '',
  films: [],
};

const CreateList = ({
  firebase,
  match: {
    params: { id },
  },
}) => {
  const [values, setValues] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);
  const lists = useSelector(getFirebaseLists);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      const list = lists.find((item) => item.id === id);
      setValues({ ...values, ...list });
      setIsEdit(true);
    }
  }, [lists]);

  const createList = (list) => {
    const listObject = { ...list, author: firebase.currentUser().uid };
    dispatch(fetchCreateList(listObject, firebaseLists.MYLISTS));
  };

  const editList = (list) => {
    dispatch(fetchEditList(list, id, firebaseLists.MYLISTS));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
      editList(values);
    } else {
      createList(values);
    }

    routeManager.push(routeCodes.LISTS);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleFilmOnChange = (films) => {
    setValues({ ...values, films });
  };
  const handleImageOnChange = async (event) => {
    const { ref } = firebase;
    const file = event.target.files[0];
    const name = `${new Date()}-${file.name}`;
    const metadata = { contentType: file.type };
    const task = ref.child(name).put(file, metadata);
    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        setValues({ ...values, image: url });
      })
      .catch(console.error);
  };
  return (
    <View
      handleSubmit={handleSubmit}
      handleOnChange={handleOnChange}
      handleFilmOnChange={handleFilmOnChange}
      handleImageOnChange={handleImageOnChange}
      values={values}
      isEdit={isEdit}
    />
  );
};

export default withFirebase(CreateList);

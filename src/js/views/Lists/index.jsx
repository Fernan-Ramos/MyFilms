import React from 'react';
import { withFirebase } from 'js/components/Firebase';
import AddFavorite from './AddFavorite';

const AddFavoriteForm = withFirebase(AddFavorite);
class Lists extends React.Component {
  render() {
    return <AddFavoriteForm />;
  }
}

export default Lists;

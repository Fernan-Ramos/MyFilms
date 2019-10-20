import React from 'react';

class AddFavorite extends React.Component {
  addFavorite = () => {
    const { firebase } = this.props;
    
    const user = firebase.asd();
    firebase.favorites()
      .add({
        title: 'Ada',
        overview: 'Lovelace',
        author: user.uid
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  getFavorite = () => {
    const { firebase } = this.props;
    const user = firebase.asd();
    firebase.favorites().where("author", "==", user.uid).get()
      .then((docRef) => {
      debugger
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  render() {
    return <><button type='button' onClick={this.getFavorite}>Get</button> </>;
  }
}

export default AddFavorite;

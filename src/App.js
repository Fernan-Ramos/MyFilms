import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import UserList from './components/UserList';

import { fetchUsers, fetchCreateUser, fetchDeleteUser } from './actions/usersActions';
import DialogForm from './components/DialogForm';
import UserService from './services/UserService';
import MovieService from './services/movies/MovieService';

class App extends Component {

  state = {
    open: false,
  };

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }


  handleClickOpen = () => {
    this.setState({ open: !this.state.open });
  };


  handleOnSaveUser = (user) => {
    this.props.dispatch(fetchCreateUser(user));
    this.handleClickOpen();
  }


  deleteUser = async (user) => {
    // try {
    //   await UserService.delete(user.id);
    //   this.props.dispatch(fetchUsers());
    // } catch (error) {

    // }


    this.props.dispatch(fetchDeleteUser(user.id));
  }


  render() {
    console.log(this.props.users)
    return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Test React
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{
          width: '60%',
          margin: '0 auto',
          marginTop: 50,
        }}>
          <Paper>
            <div style={{
              minHeight: 200,
              padding: 25
            }}>
              <Typography variant="title" color="inherit" style={{ display: 'inline' }}>Listado de usuarios</Typography>
              <UserList
                users={this.props.users}
                deleteUser={this.deleteUser}
              />
              {' '}
              <Button variant="fab" color="primary" aria-label="Add" style={{ width: 35, height: 30 }} onClick={this.handleClickOpen}>
                <AddIcon />
              </Button>
              <DialogForm
                open={this.state.open}
                handleClose={this.handleClickOpen}
                aria-labelledby="form-dialog-title"
                title={'Añadir usuario'}
                handleOnSave={this.handleOnSaveUser}
              />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  users: state.users.get('users'),
});



export default connect(mapStateToProps)(App);

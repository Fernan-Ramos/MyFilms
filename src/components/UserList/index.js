import React, * as react from 'react';
import { connect } from 'react-redux';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import toJS from '../../hoc/toJs';


class UserList extends react.Component {
    render() {
        const {users} = this.props;
        console.warn(users);
        return (
            <>
                <List>
                    {users.map((user, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText 
                                primary={`${user.name} ${user.lastName}`}
                                secondary={
                                    <React.Fragment>
                                    <Typography component='span' color='textPrimary'>
                                      {user.email}
                                    </Typography>
                                    {user.age}
                                  </React.Fragment>
                                }
                            />
                            <Delete onClick={() => this.props.deleteUser(user)}/>
                            <Edit/>
                        </ListItem>
                    ))}
                </List>
            </>
        );
    }
}


// const mapStateToProps = (state, props) => ({
//     users: state.users.get('users'),
// });


export default connect() (UserList);
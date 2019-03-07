import React, * as react from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';



const FORM_ID = 'user-form';

const renderTextField = ({
  input,
  label,
  type,
  name,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      errorText={touched && error}
      margin="dense"
      id={name}
      label={label}
      type={type}
      fullWidth
      {...input}
      {...custom}
    />
  )

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'age',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}


class DialogForm extends react.Component {

 
  onSave = values => {
    const { handleOnSave } = this.props;
    handleOnSave(values);
  };


  render() {
    const { open, title, handleClose } = this.props;
    return (

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <form>
            <Field
              name="name"
              component={renderTextField}
              label="Name"
              type='text'
              required
            />
            <Field
              name="lastName"
              component={renderTextField}
              label="Last Name"
              type='text'
              required
            />
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              type="email"
              required
            />
            <Field
              name="age"
              component={renderTextField}
              label="Age"
              type="number"
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
              </Button>
          <Button onClick={this.props.handleSubmit(this.onSave)} color="primary">
            Añadir
              </Button>
        </DialogActions>
      </Dialog>

    );
  }
}

DialogForm = reduxForm({
  form: FORM_ID,
  validate
})(DialogForm);



// const mapDispatchToProps = (dispatch) => {
//   return {
//     initForm: data => dispatch(initialize(FORM_ID, data)),
//   };
// };

// const DialogFormgReduxformConnect = connect(
//   null,
//   mapDispatchToProps,
// )(DialogForm);



export default DialogForm;
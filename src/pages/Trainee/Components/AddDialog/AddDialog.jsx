/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as constants from '../../../../configs/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      flexGrow: 1,
    },
  },
}));

export default function AddDialog(props) {
  const classes = useStyles();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is a required field'),
    email: Yup
      .string()
      .email('Email address must be a valid mail')
      .required('Email Address is a required field'),
    password: Yup
      .string()
      .required('Password is required')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, atleast one uppercase, one number and one special case character',
      ),
    confirmPassword: Yup
      .string()
      .required('Confirm password is required')
      .when('password', {
        is: (password) => (!!(password && password.length > 0)),
        then: Yup.string().oneOf([Yup.ref('password')], 'Must match passowrd'),
      }),
  });
  return (
    <Formik
      initialValues={{
        name: '', email: '', password: '', confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => props.onSubmitHandler(values)}
    >
      {({
        handleSubmit, handleChange, values, errors,
      }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={12} className={classes.root}>
              {/* <Paper> */}
              <TextField
                error={!!errors.name}
                label="Name"
                name="name"
                variant="outlined"
                helperText={errors.name}
                value={values.name}
                onChange={handleChange}
              />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={12} className={classes.root}>
              {/* <Paper> */}
              <TextField
                error={!!errors.email}
                label="EmailAddress"
                name="email"
                variant="outlined"
                helperText={errors.email}
                value={values.email}
                onChange={handleChange}
              />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={6} className={classes.root}>
              {/* <Paper> */}
              <TextField
                error={!!errors.password}
                label="Password"
                name="password"
                variant="outlined"
                helperText={errors.password}
                value={values.password}
                onChange={handleChange}
              />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={6} className={classes.root}>
              {/* <Paper> */}
              <TextField
                error={!!errors.confirmPassword}
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                helperText={errors.confirmPassword}
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {/* </Paper> */}
            </Grid>
          </Grid>
          <div style={constants.TEXT_RIGHT}>
            <Button color="primary" onClick={props.onCloseHanlder}>
              CANCEL
            </Button>
            <Button type="submit" variant="contained" color="primary">
              SUBMIT
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

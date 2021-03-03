import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Formik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      width: '100%',
    },
  },
}));
const validationSchema = Yup.object({
  loginemail: Yup
    .string()
    .email('Email address must be a valid mail')
    .required('Email Address is a required field'),
  loginpassword: Yup
    .string()
    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, atleast one uppercase, one number and one special case character',
    ),
});
export default function LoginComponet() {
  const classes = useStyles();
  return (
    <div style={{ textAlign: 'center' }}>
      <Card style={{
        width: '400px', marginTop: '15px', padding: '20px',
      }}
      >
        <div>
          <Icon
            className="fas fa-lock"
            style={{
              color: 'white', backgroundColor: 'red', padding: '10px', borderRadius: '50%',
            }}
          />
          <h2>Login</h2>
        </div>
        <Formik
          initialValues={{
            loginemail: '', loginpassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleSubmit, handleChange, values, errors,
          }) => (
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <Grid container spacing={1}>
                <Grid item xs={12} className={classes.root}>
                  {/* <Paper> */}
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon
                            style={{ width: '1.5em', fontSize: '20px' }}
                            className="fas fa-envelope"
                          />
                        </InputAdornment>
                      ),
                    }}
                    error={!!errors.loginemail}
                    label="Email Address"
                    name="loginemail"
                    variant="outlined"
                    helperText={errors.loginemail}
                    value={values.loginemail}
                    onChange={handleChange}
                  />
                  {/* </Paper> */}
                </Grid>
                <Grid item xs={12} className={classes.root}>
                  {/* <Paper> */}
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon
                            style={{ width: '1.5em', fontSize: '20px' }}
                            className="fas fa-eye-slash"
                          />
                        </InputAdornment>
                      ),
                    }}
                    error={!!errors.loginpassword}
                    label="Password"
                    name="loginpassword"
                    variant="outlined"
                    helperText={errors.loginpassword}
                    value={values.loginpassword}
                    onChange={handleChange}
                  />
                  {/* </Paper> */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                style={{ marginTop: '15px', width: '100%' }}
                variant="contained"
                color="primary"
              >
                SIGN IN
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

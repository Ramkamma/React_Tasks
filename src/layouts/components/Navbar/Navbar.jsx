import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as constants from '../../../configs/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavbarComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          <Link to="/trainee" style={constants.REMOVE_LINK_STYLES}>
            TRAINEE
          </Link>
          <Link to="/test-field-demo" style={constants.REMOVE_LINK_STYLES}>
            TEXTFIELD DEMO
          </Link>
          <Link to="/input-demo" style={constants.REMOVE_LINK_STYLES}>
            INPUT DEMO
          </Link>
          <Link to="/childern-demo" style={constants.REMOVE_LINK_STYLES}>
            CHILDREN DEMO
          </Link>
          <Button color="inherit">LOGOUT</Button>
          {/*  <Link to="/trainee">
            LOGOUT
          </Link> */}
          {/*  <Button color="inherit">TEXTFIELD DEMO</Button>
          <Button color="inherit">INPUT DEMO</Button>
          <Button color="inherit">CHILDREN DEMO</Button>
          <Button color="inherit">LOGOUT</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

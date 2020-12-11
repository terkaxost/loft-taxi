import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Logo } from 'loft-taxi-mui-theme';
import propTypes from 'prop-types';
import { Context } from '../App';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: "#FFC617"
  },
  toolbar: {
      background: "#1C1A19"
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (        
    <Context.Consumer> 
        { ({logIn, logOut, getIsLoggedIn}) => 
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}><Logo /></Typography>
                    <Button color="primary" onClick={ () => {props.pageChange('OrderPage')} }>Карта</Button>
                    <Button color="primary" onClick={ () => {props.pageChange('ProfilePage')} }>Профиль</Button>
                    <Button color="primary" onClick={ () => {
                        props.pageChange('LoginPage');
                        logOut();
                    }} >Выйти</Button>
                </Toolbar>
            </AppBar>
        } 
      </Context.Consumer>
  );
}

Header.propTypes = {
    pageChange: propTypes.func.isRequired
}
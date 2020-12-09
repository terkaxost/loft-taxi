import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Logo } from 'loft-taxi-mui-theme';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH_LOGOUT } from '../actions/auth';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: "#FFC617"
  },
  toolbar: {
      background: "#1C1A19"
  }
}));

export function Header() {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (        
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}><Logo /></Typography>
                <Link to="/order"><Button color="primary" >Карта</Button></Link>
                <Link to="/profile"><Button color="primary" >Профиль</Button></Link>
                <Button color="primary" onClick={ () => dispatch( {type: AUTH_LOGOUT} ) } >Выйти</Button>                
            </Toolbar>
        </AppBar>
    )
}
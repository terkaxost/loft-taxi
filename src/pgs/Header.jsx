// import React from 'react'

// export const Header = (props) => {
//     return (
//         <>
//             <a href="/" onClick={ (event) => {
//                 event.preventDefault() 
//                 props.pageChange('OrderPage')} 
//             }>Карта</a>
//             <a href="/" onClick={ (event) => {
//                 event.preventDefault() 
//                 props.pageChange('ProfilePage')} 
//             }>Профиль</a>
//             <a href="/" onClick={ (event) => {
//                 event.preventDefault() 
//                 props.pageChange('LoginPage')} 
//             }>Выйти</a>
//         </>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>LOGO</Typography>
          <Button color="inherit" onClick={ () => {props.pageChange('OrderPage')} }>Карта</Button>
          <Button color="inherit" onClick={ () => {props.pageChange('ProfilePage')} }>Профиль</Button>
          <Button color="inherit" onClick={ () => {props.pageChange('LoginPage')} } >Выйти</Button>
        </Toolbar>
      </AppBar>
  );
}
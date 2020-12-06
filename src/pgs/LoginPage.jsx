import React, { useState } from 'react';
import { FormStyles } from './FormStyles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Context } from '../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    ...FormStyles
  }));

function LoginError(props) {
    return <div>{ props.errorText }</div>
}

export function LoginPage(props) {
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const classes = useStyles();

    return (          
        <Context.Consumer> 
            { ({logIn, logOut, getIsLoggedIn}) => 
                <div className="wrapper form">
                    <Typography className={classes.header} variant="h5" gutterBottom ><b>Войти</b></Typography>
                    <TextField className={classes.input} id="standard-basic" label="Имя пользователя *" 
                        onClick={ (event) => {event.target.placeholder = "mail@mail.ru"} } 
                        onChange={ (event) => {
                            setEmail(event.target.value);
                        } } 
                    />
                    <FormControl className={clsx(classes.margin, classes.textField, classes.input)}>
                        <InputLabel htmlFor="standard-adornment-password">Пароль *</InputLabel>
                        <Input id="standard-adornment-password" type='password' 
                            onClick={ (event) => {event.target.placeholder = "******"} } 
                            onChange={ (event) => {
                                setPassword(event.target.value);
                            } } 
                        />
                    </FormControl>
                    <LoginError errorText={ props.errorText }/>
                    <Link to="/profile"><Button className={classes.button} variant="contained" onClick={ () => { logIn(getEmail, getPassword) } } >Войти</Button></Link>
                    <Typography className={classes.link}>Новый пользователь?  <Link to="/registration" >Зарегистрируйтесь</Link></Typography>
                </div>
            } 
        </Context.Consumer>
    )
}
import React, { useState } from 'react';
import { FormStyles } from './FormStyles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userNew } from '../actions/user';

const useStyles = makeStyles((theme) => ({
    ...FormStyles
}));

export function RegistrationPage(props) {
    const dispatch = useDispatch();
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getName, setName] = useState('');
    const [getSername, setSername] = useState('');
    const classes = useStyles();

    return (          
        <div className="wrapper form">    
            <form noValidate autoComplete="off">
                <Typography className={classes.header} variant="h5" gutterBottom ><b>Регистрация</b></Typography>
                <TextField className={classes.input} id="standard-basic" label="Адрес электронной почты *" 
                    onClick={ (event) => {event.target.placeholder = "mail@mail.ru"} } 
                    onChange={ (event) => { setEmail(event.target.value) } } 
                />
                <TextField className={classes.inputHalf} id="standard-basic" label="Имя *" 
                    onClick={ (event) => {event.target.placeholder = "Имя"} } 
                    onChange={ (event) => { setName(event.target.value) } } 
                />
                <TextField className={classes.inputHalf} id="standard-basic" label="Фамилия *" 
                    onClick={ (event) => {event.target.placeholder = "Фамилия"} } 
                    onChange={ (event) => { setSername(event.target.value) } } 
                />
                <TextField className={classes.input} id="standard-basic" label="Пароль *" 
                    onClick={ (event) => {event.target.placeholder = "******"} } 
                    onChange={ (event) => { setPassword(event.target.value) } } 
                />
                <Link to="/registration/confirm"><Button className={classes.button} variant="contained" onClick={ () => {
                    dispatch( userNew(getEmail, getPassword, getName, getSername) );
                } } >Зарегистрироваться</Button></Link>
                <Typography className={classes.link}>Уже зарегистрированы? <Link to="/login" >Войти</Link></Typography>
            </form>
        </div>
    )
}

export function RegistrationConfirm() {
    const success = useSelector( (state) => state.user.success );
    const token = useSelector( (state) => state.user.token );
    const error = useSelector( (state) => state.user.error );
    const classes = useStyles();
    
    return (
        <div className="wrapper form">
            <Typography className={classes.header} variant="h5" gutterBottom ><b>Регистрация</b></Typography>
            {success
                ? (<>
                    <Typography >Регистрация прошла успешно. Токен {token}</Typography>
                    <Link to="/login"><Button className={classes.button} variant="contained" >Перейти к авторизации</Button></Link>
                </>)
                : (<>
                    <Typography >Регистрация не прошла. {error}</Typography>
                    <Link to="/registration"><Button className={classes.button} variant="contained" >Повторить</Button></Link>
                </>)
            }
        </div>
    )
}
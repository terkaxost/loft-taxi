import React from 'react';
import { FormStyles } from './FormStyles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import propTypes from 'prop-types';
import { Context } from '../App';

const useStyles = makeStyles((theme) => ({
    ...FormStyles
  }));

function LoginPage(props) {
    const [getError, setError] = React.useState('');
    const classes = useStyles();
    
    let [email, password] = [];

    const loginClick = (event) => {
        event.target.placeholder = "mail@mail.ru"
    }
    const loginChange = (event) => {
        email = event.target.value;
        setError("");
    }
    const passwordClick = (event) => {
        event.target.placeholder = "******"
    }
    const passwordChange = (event) => {
        password = event.target.value;
    }
    const buttonClick = (logIn, getIsLoggedIn) => {
        logIn(email, password) ? props.pageChange('OrderPage') : setError("Не верно");
    }
    const linkClick = () => {
        props.pageChange('RegistrationPage')
    }

    return (          
        <Context.Consumer> 
            { ({logIn, logOut, getIsLoggedIn}) => 
                <div className="wrapper form">
                    <Typography className={classes.header} variant="h5" gutterBottom ><b>Войти</b></Typography>
                    <form className={classes.root} noValidate autoComplete="off">                                
                        <TextField 
                            className={classes.input} 
                            id="standard-basic" 
                            label="Имя пользователя *" 
                            onClick={ loginClick } 
                            onChange={ loginChange } 
                            helperText={ getError }
                        />
                        <FormControl className={clsx(classes.margin, classes.textField, classes.input)}>
                            <InputLabel htmlFor="standard-adornment-password">Пароль *</InputLabel>
                            <Input id="standard-adornment-password" type='password' onClick={ passwordClick } onChange={ passwordChange } />
                        </FormControl>
                        <Button className={classes.button} variant="contained" onClick={ () => buttonClick(logIn, getIsLoggedIn) } >Войти</Button>
                    </form>
                    <Typography className={classes.link}>Новый пользователь?  <Link href="#" onClick={ linkClick } >Зарегистрируйтесь</Link></Typography>
                </div>
            } 
        </Context.Consumer>
    )
}

LoginPage.propTypes = {
    pageChange: propTypes.func.isRequired
}

export default LoginPage
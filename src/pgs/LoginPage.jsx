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

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        // margin: theme.spacing(1),
        // margin: "10px"
      }
    },
    ...FormStyles
  }));

function LoginPage(props) {
    let user = {
        name: '',
        password: ''
    }
    const classes = useStyles();

    const loginClick = (event) => {
        event.target.placeholder = "mail@mail.ru"
    }
    const loginChange = (event) => {
        user.name = event.target.value
    }
    const passwordClick = (event) => {
        event.target.placeholder = "******"
    }
    const passwordChange = (event) => {
        user.password = event.target.value
    }
    const buttonClick = (event) => {
        props.pageChange('OrderPage')
        // check data and send user
    }
    const linkClick = (event) => {
        props.pageChange('RegistrationPage')
    }

    return (          
        <div className="form">
            <Typography className={classes.header} variant="h5" gutterBottom ><b>Войти</b></Typography>
            <form className={classes.root} noValidate autoComplete="off">                                
                <TextField className={classes.input} id="standard-basic" label="Имя пользователя *" onClick={ loginClick } onChange={ loginChange } />
                <FormControl className={clsx(classes.margin, classes.textField, classes.input)}>
                    <InputLabel htmlFor="standard-adornment-password">Пароль *</InputLabel>
                    <Input id="standard-adornment-password" type='password' onClick={ passwordClick } onChange={ passwordChange } />
                </FormControl>
                <Button className={classes.button} variant="contained" onClick={ buttonClick } >Войти</Button>
            </form>
            <Typography className={classes.link}>Новый пользователь?  <Link href="#" onClick={ linkClick } >Зарегистрируйтесь</Link></Typography>
        </div>
    )
}

export default LoginPage
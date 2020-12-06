import React from 'react';
import { FormStyles } from './FormStyles'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class RegistrationPage extends React.Component {
    
    render () {
        return (     
            <div className="wrapper form">    
                <form noValidate autoComplete="off">
                    <Typography className={this.props.classes.header} variant="h5" gutterBottom ><b>Регистрация</b></Typography>
                    <TextField className={this.props.classes.input} id="standard-basic" label="Адрес электронной почты *" />
                    <TextField className={this.props.classes.inputHalf} id="standard-basic" label="Имя *" />
                    <TextField className={this.props.classes.inputHalf} id="standard-basic" label="Фамилия *" />
                    <TextField className={this.props.classes.input} id="standard-basic" label="Пароль *" />
                    <Link to="/profile"><Button className={this.props.classes.button} variant="contained" >Зарегистрироваться</Button></Link>
                    <Typography className={this.props.classes.link}>Уже зарегистрированы? <Link to="/login" >Войти</Link></Typography>
                </form>
            </div>
        )
    }
}

export default withStyles(FormStyles)(RegistrationPage)
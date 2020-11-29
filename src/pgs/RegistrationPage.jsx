import React from 'react';
import { FormStyles } from './FormStyles'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class RegistrationPage extends React.Component {
    buttonClick(event) {
        this.props.pageChange('ProfilePage')
    }
    linkClick(event) {
        this.props.pageChange('LoginPage')
    }
    render () {
        return (     
            <div className="wrapper form">    
                <form noValidate autoComplete="off">
                    <Typography className={this.props.classes.header} variant="h5" gutterBottom ><b>Регистрация</b></Typography>
                    <TextField className={this.props.classes.input} id="standard-basic" label="Адрес электронной почты *" />
                    <TextField className={this.props.classes.inputHalf} id="standard-basic" label="Имя *" />
                    <TextField className={this.props.classes.inputHalf} id="standard-basic" label="Фамилия *" />
                    <TextField className={this.props.classes.input} id="standard-basic" label="Пароль *" />
                    <Button className={this.props.classes.button} variant="contained" onClick={ (event) => this.buttonClick(event) }>Зарегистрироваться</Button>
                    <Typography className={this.props.classes.link}>Уже зарегистрированы? <Link href="#" onClick={ (event) => this.linkClick(event) }>Войти</Link></Typography>
                </form>
            </div>
        )
    }
}

export default withStyles(FormStyles)(RegistrationPage)
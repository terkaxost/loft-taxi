import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = {
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}

class RegistrationPage extends React.Component {
    state = {
        user: {
            name: '',
            pass: ''
        }
    }

    buttonClick(event) {
        event.preventDefault()
        this.props.pageChange('ProfilePage')
    }
    linkClick(event) {
        event.preventDefault()
        this.props.pageChange('LoginPage')
    }
    render () {
        return (     
            <div className="registration_form">    
                <form noValidate autoComplete="off">
                    <h1>Регистрация</h1>
                    <br/><TextField id="standard-basic" label="Адрес электронной почты *" />
                    <br/><TextField id="standard-basic" label="Имя *" />
                    <br/><TextField id="standard-basic" label="Фамилия *" />
                    <br/><TextField id="standard-basic" label="Пароль *" />
                    <br/><Button className={this.props.classes.button} variant="contained" onClick={ (event) => this.buttonClick(event) }>
                        Зарегистрироваться
                    </Button>
                    <Typography>Уже зарегистрированы?
                        <Link href="#" onClick={ (event) => this.linkClick(event) }>
                            Войти
                        </Link>
                    </Typography>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(RegistrationPage)
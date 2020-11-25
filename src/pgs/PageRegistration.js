import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}));

class PageRegistration extends React.Component {
    state = {
        user: {
            name: '',
            pass: ''
        }
    }
    classes() {
        return useStyles
    }

    linkClick(event) {
        event.preventDefault()
        this.props.pageChange('PageLogin')
    }
    render () {
        return (     
            <div className="registration_form">    
                <div className={useStyles.root}>
                    <form noValidate autoComplete="off">
                        <h1>{this.props.page.header}</h1>
                        <br/><TextField id="standard-basic" label="Адрес электронной почты *" />
                        <br/><TextField id="standard-basic" label="Имя *" />
                        <br/><TextField id="standard-basic" label="Фамилия *" />
                        <br/><TextField id="standard-basic" label="Пароль *" />
                        
                        <br/><Button className={this.classes.root} variant="contained">Default</Button>
                        
                        <Typography>
                            <br/><Link href="#" onClick={ (event) => {
                                        event.preventDefault()
                                        this.props.pageChange('PageLogin')
                                    } 
                                }>
                                Link1
                            </Link>
                            <br/><Link href="#" onClick={ this.linkClick.bind(this) }>
                                Link2
                            </Link>
                            <br/><Link href="#" onClick={ (event) => this.linkClick(event) }>
                                Link3
                            </Link>
                        </Typography>
                    </form>
                </div>
            </div>
        )
    }
}

export default PageRegistration
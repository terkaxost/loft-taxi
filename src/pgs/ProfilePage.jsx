import React from 'react'
import { FormStyles } from './FormStyles'
import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import propTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    ...FormStyles
}));

function ProfilePage(props) {
    const classes = useStyles();

    const numberChange = (event) => {
        (event.target.value < 0) ? console.log('letter') : console.log('number')
    }

    return (
        <>
            <Header pageChange={props.pageChange}/>
            <div className="wrapper profile">
                <Typography className={classes.header} variant="h5" gutterBottom ><b>Профиль</b></Typography>
                <Typography >Введите платежные данные</Typography>
                <div className="form" >
                    <TextField className={classes.input} id="standard-basic1" label="Имя владельца *" />
                    <TextField className={classes.input} id="standard-basic2" label="Номер карты *" onChange={ numberChange } />
                    <TextField className={classes.inputHalf} id="standard-basic3" label="MM/YY *" />
                    <TextField className={classes.inputHalf} id="standard-basic4" label="CVC  *" />
                </div>
                <div className="card">
                    <Card >
                        <CardContent >
                            <Typography className={classes.title} color="textSecondary" gutterBottom>MM/YY</Typography>
                            <Typography className={classes.input} variant="h5" component="h2">NUMBER</Typography>
                            <Typography className={classes.input} variant="h5" component="h2">USER</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">VISA / MASTERCARD</Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={ {clear: "left"} }>
                    <Button className={classes.button} variant="contained" >Сохранить</Button>
                </div>
            </div>

            <div className="wrapper form">
                <Typography className={classes.header} variant="h5" gutterBottom ><b>Профиль</b></Typography>
                <Typography >Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
                <Button className={classes.button} variant="contained" >Перейти на карту</Button>
            </div>
        </>
    )
}

ProfilePage.propTypes = {
    pageChange: propTypes.func.isRequired
}

export default ProfilePage
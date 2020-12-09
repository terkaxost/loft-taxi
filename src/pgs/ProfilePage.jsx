import React, { useState } from 'react';
import { FormStyles } from './FormStyles';
import { Header } from './Header';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cardAdd } from '../actions/card';

const useStyles = makeStyles((theme) => ({
    ...FormStyles
}));

export function ProfilePage(props) {
    const token = useSelector( (state) => state.user.token );
    const dispatch = useDispatch();
    const [getCardNumber, setCardNumber] = useState('');
    const [getExpiryDate, setExpiryDate] = useState('');
    const [getCardName, setCardName] = useState('');
    const [getCvc, setCvc] = useState('');
    const classes = useStyles();

    return (
        <><Header pageChange={props.pageChange}/>
        <div className="wrapper profile">
            <Typography className={classes.header} variant="h5" gutterBottom ><b>Профиль</b></Typography>
            <Typography >Введите платежные данные</Typography>
            <div className="form" >
                <TextField className={classes.input} id="standard-basic1" label="Имя владельца *" 
                    onClick={ (event) => {event.target.placeholder = "IVAN IVANOV"} } 
                    onChange={ (event) => { setCardName(event.target.value) } }
                />
                <TextField className={classes.input} id="standard-basic2" label="Номер карты *" 
                    onClick={ (event) => {event.target.placeholder = "0000 00000 00000 0000"} } 
                    onChange={ (event) => { setCardNumber(event.target.value) } }
                />
                <TextField className={classes.inputHalf} id="standard-basic3" label="MM/YY *" 
                    onClick={ (event) => {event.target.placeholder = "MM/YY"} } 
                    onChange={ (event) => { setExpiryDate(event.target.value) } }
                />
                <TextField className={classes.inputHalf} id="standard-basic4" label="CVC  *" 
                    onClick={ (event) => {event.target.placeholder = "000"} } 
                    onChange={ (event) => { setCvc(event.target.value) } }
                />
            </div>
            <div className="card">
                <Card >
                    <CardContent >
                        <Typography className={classes.title} color="textSecondary" gutterBottom>{getExpiryDate}</Typography>
                        <Typography className={classes.input} variant="h5" component="h2">{getCardNumber}</Typography>
                        <Typography className={classes.input} variant="h5" component="h2">{getCardName}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">VISA / MASTERCARD</Button>
                    </CardActions>
                </Card>
            </div>
            <div style={ {clear: "left"} }>
                <Link to="/profile/confirm"><Button className={classes.button} variant="contained" onClick={ () => { 
                    dispatch( cardAdd(getCardNumber, getExpiryDate, getCardName, getCvc, token) );
                } } >Сохранить</Button></Link>
            </div>
        </div></>
    )
}

export function ProfileConfirm(props) {
    const success = useSelector( (state) => state.card.success );
    const error = useSelector( (state) => state.card.error );
    const classes = useStyles();
    
    return (
        <><Header/>
        <div className="wrapper form">
            <Typography className={classes.header} variant="h5" gutterBottom ><b>Профиль</b></Typography>
            {success
                ? (<>
                    <Typography >Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
                    <Link to="/order"><Button className={classes.button} variant="contained" >Перейти на карту</Button></Link>
                </>)
                : (<>
                    <Typography >Платёжные не данные обновлены. {error}</Typography>
                    <Link to="/profile"><Button className={classes.button} variant="contained" >Повторить</Button></Link>
                </>)
            }
        </div></>
    )
}
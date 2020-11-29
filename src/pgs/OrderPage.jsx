import React, { useState } from 'react';
import { FormStyles } from './FormStyles';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(20),
        },
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 330,
        textAlign: "left",
      },
      selectEmpty: {
        marginTop: theme.spacing(1),
      },
    ...FormStyles
  }));

const myCards = [
    {
        name: "Стандарт",
        cost: "150Р",
        img: "IMG",
        theme: 1
    },
    {
        name: "Бизнес",
        cost: "250Р",
        img: "IMG",
        theme: 1
    }
    ,{
        name: "Премиум",
        cost: "350Р",
        img: "IMG",
        theme: 1
    }
];

function Card(props) {
    return <Paper elevation={props.card.theme} 
            onMouseEnter={ () => { props.cardTheme("enter", props.card.name) } } 
            onMouseLeave={ () => { props.cardTheme("leave", props.card.name) } } 
            onClick={ () => { props.cardTheme("click", props.card.name) } } 
        >
            <div style={{textAlign: "left", margin: "5px"}}>
                <Typography variant="subtitle2" gutterBottom >{props.card.name}</Typography>
                <Typography variant="caption" display="block" >Стоимость</Typography>
                <Typography variant="h6" display="block" gutterBottom >{props.card.cost}</Typography>
            </div>
            <Typography >{props.card.img}</Typography>
            
        </Paper>
}

function OrderPage(props) {
    const classes = useStyles();
    
    const [getCards, setCards] = useState( myCards );  
    const [from, setFrom] = React.useState('');  
    const [where, setWhere] = React.useState(''); 

    const fromChange = (event) => {
        setFrom(event.target.value);
    };
    const whereChange = (event) => {
        setWhere(event.target.value);
    };
    const cardChangeTheme = (action, name) => {
        const cards = getCards.concat();
        const card = cards.find(c => c.name === name);
        if (action === "enter" & card.theme !== 7) {card.theme = 3}
        if (action === "leave" & card.theme !== 7) {card.theme = 1}
        if (action === "click") {
            const currentTheme = card.theme;
            cards.map( c => c.theme = 1 )
            currentTheme === 7 ? card.theme = 3 : card.theme = 7
        }
        setCards(cards);
    }

    return (
        <>
            <Header pageChange={props.pageChange}/>
            <div className="wrapper form">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Откуда</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={from}
                    onChange={fromChange}
                    >
                    <MenuItem value={1}>Адрес 1</MenuItem>
                    <MenuItem value={2}>Адрес 2</MenuItem>
                    <MenuItem value={3}>Адрес 3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Куда</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={where}
                    onChange={whereChange}
                    >
                    <MenuItem value={1}>Адрес 1</MenuItem>
                    <MenuItem value={2}>Адрес 2</MenuItem>
                    <MenuItem value={3}>Адрес 3</MenuItem>
                    </Select>
                </FormControl>
                <div className={classes.cards}>
                    {getCards.map( cardObj => (
                        <Card cardTheme={ cardChangeTheme } card={ cardObj } key={ Math.random() } />
                    ))}
                </div>
                <Button className={classes.button} variant="contained" >Заказать</Button>
            </div>

            <div className="wrapper form">
                <Typography className={classes.header} variant="h5" gutterBottom ><b>Заказ размещен</b></Typography>
                <Typography >Ваше такси уже едет к вам. Прибудет приблизительно через 10 мин</Typography>
                <Button className={classes.button} variant="contained" >Сделать новый заказ</Button>
            </div>
        </>
    )
}

export default OrderPage
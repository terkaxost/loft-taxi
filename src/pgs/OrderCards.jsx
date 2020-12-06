import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const myCards = [
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

export function Card(props) {
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
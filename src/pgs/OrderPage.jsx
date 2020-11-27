import React from 'react'
// import { FormStyles } from './FormStyles'
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
import Header from './Header'

function OrderPage(props) {
    return (
        <>
            <Header pageChange={props.pageChange}/>
            <title>OrderPage</title>
            <h1>Заказать</h1>
        </>
    )
}

export default OrderPage
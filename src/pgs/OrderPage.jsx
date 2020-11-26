import React from 'react'

export const OrderPage = (props) => {
    return (
        <div>
            <title>OrderPage</title>
            <h1>Заказать</h1>
            <a href="/" onClick={ (event) => {
                event.preventDefault() 
                props.pageChange('OrderPage')} 
            }>Карта</a>
            <a href="/" onClick={ (event) => {
                event.preventDefault() 
                props.pageChange('ProfilePage')} 
            }>Профиль</a>
            <a href="/" onClick={ (event) => {
                event.preventDefault() 
                props.pageChange('LoginPage')} 
            }>Выйти</a>
        </div>
    )
}
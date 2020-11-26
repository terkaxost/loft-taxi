import React from 'react'

export const ProfilePage = (props) => {
    return (
        <div>
            <title>ProfilePage</title>
            <h1>Профиль</h1>
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
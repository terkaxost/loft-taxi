import React from 'react'
import { FormStyles } from './FormStyles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Header from './Header'

function ProfilePage(props) {
    return (
        <>
            <Header pageChange={props.pageChange}/>
            <title>ProfilePage</title>
            <h1>Профиль</h1>
        </>
    )
}

export default ProfilePage
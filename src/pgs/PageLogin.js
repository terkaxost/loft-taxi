import React from 'react';
import '.././index.css';

const styles = {
    h1: {
       margin: '10px',
        alignItems: 'center',
    },
    form: {
        margin: '10px',
        padding: 0,
        listStyle: 'none',
    },
    label: {
        // margin: '50px 0px',
        // padding: '50px 0px'
    },
    input: {       
        margin: '10px 0px',
        // padding: '50px 0px',
        border: 'none',
        borderBottom: '1px solid #000',
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        margin: '40px 0px',
        padding: '10px 150px'
    },
    p: {
        margin: 0
    }
}

function PageLogin(props) {
    let user = {
        name: '',
        pass: ''
    }
    const formHandleSubmit = event => {
        event.preventDefault();
        console.log(user)
    }
    const inputEnter = () => { 
        
    }
    const inputLeave = () => { 
        
    }
    const inputFocus = (event) => { 
        event.preventDefault();
    }
    const inputBlur = () => { 
        
    }
    const inputClick = () => {
        
    }
    const inputValue = (text) => {
        console.log(text)
    }
    const linkClick = (event) => {
        event.preventDefault()
        props.pageChange('PageRegistration')
    }

    const buttonClick = (event) => {
        event.preventDefault()
        console.log('btn click')
    }

    return (
        <div>            
            <div className="enter_form">
                <h1 style={styles.h1}>{props.page.header}</h1>
                <form style={styles.form} onSubmit={ formHandleSubmit }>
                    <label style={styles.label} htmlFor="login">Имя пользователя *</label>
                    <input 
                        style={styles.input}
                        id="login"
                        type="text"
                        name="login"
                        placeholder="Имя пользователя *"
                        onChange={ (event) => {
                            user.name = event.target.value
                            inputValue(event.target.value)
                        } }
                        onMouseEnter={ inputEnter }
                        onMouseLeave={ inputLeave}
                        onFocus={ inputFocus }
                        onBlur={ inputBlur }
                        onClick={ inputClick } 
                    />
                    <label style={styles.label} htmlFor="password">Пароль *</label>
                    <input 
                        style={styles.input}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Пароль *"
                        onChange={ (event) => user.pass = event.target.value }
                        onMouseEnter={ inputEnter }
                        onMouseLeave={ inputLeave}
                        onFocus={ inputFocus }
                        onBlur={ inputBlur }
                    />
                    <button 
                        style={styles.button}
                        onClick={ (event) => buttonClick(event) }
                    >Войти</button>
                    <p style={styles.p}>Новый пользователь? <a href="/registration/" onClick={ linkClick }>Зарегистрируйтесь</a></p>
                </form>
            </div>
        </div>
    )
}

export default PageLogin
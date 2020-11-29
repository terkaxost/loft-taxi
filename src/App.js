import React from 'react';
import './index.css';
import LoginPage from './pgs/LoginPage'
import RegistrationPage from './pgs/RegistrationPage'
import ProfilePage from './pgs/ProfilePage'
import OrderPage from './pgs/OrderPage'

class App extends React.Component {    
    state = {
        currentPageName: 'OrderPage',
    }

    onPageChange = (name) => {
        this.setState({currentPageName: name})
    }

    render() {
        const pageComponents = {
            LoginPage: <LoginPage pageChange={ this.onPageChange } />,
            RegistrationPage: <RegistrationPage pageChange={ this.onPageChange } />,
            ProfilePage: <ProfilePage pageChange={ this.onPageChange } />,
            OrderPage: <OrderPage pageChange={ this.onPageChange } />
        }
        return (
            pageComponents[this.state.currentPageName]
        )
    } 
}

export default App;

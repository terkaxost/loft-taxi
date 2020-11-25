import React from 'react';
import './index.css';

import PageLogin from './pgs/PageLogin'
import PageRegistration from './pgs/PageRegistration'
import {PageProfile} from './pgs/PageProfile'
import Hook from './pgs/Hook'

const pages = {
    PageLogin: {
        name: "PageLogin",
        header: "Войти",
        link: "login"
    },
    PageRegistration: {
        name: "PageRegistration",
        header: "Регистрация",
        link: "registration"
    },
    PageOrder: {
        name: "PageOrder",
        header: "Карта",
        link: "main/order"
    },
    PageProfile: {
        name: "PageProfile",
        header: "Профиль",
        link: "main/profile"
    }
}

class App extends React.Component {    
    state = {
        // currentPageName: 'PageLogin',
        // currentPageName: 'PageRegistration',
        currentPageName: 'PageProfile'
    }

    changePage = (pageName) => {
        this.setState({currentPageName: pageName})
    }
    renderPage() {
        if (this.state.currentPageName === 'PageLogin') {return <PageLogin pageChange={ this.changePage } page={ pages['PageLogin'] }/>}
        if (this.state.currentPageName === 'PageRegistration') {return <PageRegistration pageChange={ this.changePage } page={ pages['PageRegistration'] }/>}
        if (this.state.currentPageName === 'PageProfile') {return <PageProfile />}
        // for (let page of pages) {
        //     if (this.state.currentPageName === page.name) {
        //         return page.render
        //     }
            // return ( (this.state.currentPageName === page.name) ? page.render : null )
            // return ( (this.state.currentPageName === page.name) && page.render )
        // }
    }
    
    render() {
        return (
            <div className="wrapper">
                <button onClick={ () => this.changePage('PageLogin') }>PageLogin</button>
                <button onClick={ () => this.changePage('PageRegistration') }>PageRegistration</button>
                <button onClick={ () => this.changePage('PageProfile') }>PageProfile</button>
                {/* <Hook /> */}
                {                     
                    this.renderPage()
                }
            </div>
        )   
    } 
}

export default App;

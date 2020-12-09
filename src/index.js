import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from './redux/store'

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
        <Provider store={store}>            
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
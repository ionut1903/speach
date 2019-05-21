import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Rounter
import { BrowserRouter } from 'react-router-dom';

// App
import App from './containers/App';

// Styles
// import './shared/styles/index.less';
import './shared/styles/style.css';


class Main extends Component {
    render() {

        return ( <
            BrowserRouter >
            <
            App / >
            <
            /BrowserRouter>
        )
    }
}

ReactDOM.render( < Main / > , document.getElementById('root'));
serviceWorker.unregister();
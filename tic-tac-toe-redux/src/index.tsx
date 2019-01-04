import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import store from './redux/Store'

import { Game } from "./components/Game";

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
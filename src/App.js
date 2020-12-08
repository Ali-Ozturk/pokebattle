import * as React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import history from './utils/history.js';
import {GlobalStyle} from "./styles/global-styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducers from './reducers';
import FighterSelectionScreen from "./screens/FighterSelectionScreen";

const store = createStore(reducers);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <GlobalStyle/>
                    <Switch>
                        <Route exact path={"/"} component={FighterSelectionScreen}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

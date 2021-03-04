import * as React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import history from './utils/history.js';
import {GlobalStyle} from "./styles/global-styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import reducers from './store/reducers';
import FighterSelectionScreen from "./pages/FighterSelectionScreen";
import VersusScreen from "./pages/VersusScreen";
import SelectedRoute from "./routes/SelectedRoute";
import BattleScreen from "./pages/BattleScreen";

const store = createStore(reducers);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <GlobalStyle/>
                    <Switch>
                        <Route exact path={"/"} component={FighterSelectionScreen}/>
                        <SelectedRoute exact path={"/versus"} component={VersusScreen}/>
                        <SelectedRoute exact path={"/battle"} component={BattleScreen}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

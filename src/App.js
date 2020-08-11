import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/components/Menu";

const App = () => {
    return (
        <Router>
                <Menu />
                <Switch>
                    <Route path="/about">
                        about
                    </Route>
                    <Route path="/users">
                        users
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;

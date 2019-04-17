import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import connectRoute from "../../utils/connectRoute";
// import asyncComponent from "../../utils/AsyncComponent";
import './style.css';

import AsyncHome from "../Home/index";
import AsyncLogin from "../AsyncLogin/index";
// const AsyncHome=connectRoute(asyncComponent(()=>import("../Home/index")));
// const AsyncLogin=connectRoute(asyncComponent(()=>import("../AsyncLogin/index")));
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={AsyncHome} />
                        <Route path="/login" component={AsyncLogin} />
                        <Route path="/posts" component={AsyncHome} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;
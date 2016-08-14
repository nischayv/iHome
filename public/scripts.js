import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./static/components/app";
import Login from "./static/pages/login";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="login" name="login" component={Login}></Route>
        </Route>
    </Router>,
    app);
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import App from "./static/components/App";
import Login from "./static/pages/Login";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="login" name="login" component={Login}></Route>
        </Route>
    </Router>,
app);
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, IndexRedirect} from "react-router";
import $ from "jquery";


import App from "./static/components/App";
import Login from "./static/pages/Login";
import Home from "./static/pages/Home";

const app = document.getElementById('app');

function isLoggedIn() {
    $.ajax({
        url: 'http://localhost:8080/api/isLoggedIn',
        method: 'GET',
        success: function(data) {
            console.log(data);
        },
        error: function() {
            browserHistory.push('/login');
        }
    });
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/login" />
            <Route path="login" name="login" component={Login}></Route>
            <Route path="home" name="home" component={Home} onEnter={isLoggedIn}></Route>
        </Route>
    </Router>,
app);
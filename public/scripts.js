import React from "bower_components/react/react";
import ReactDOM from "bower_components/react/react-dom";
import { Router, Route, IndexRoute, hashHistory } from "bower_components/react-router/modules";

import Login from "./static/pages/login";
import Home from "./static/pages/home";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={}>
            {/*<IndexRoute component={Featured}></IndexRoute>*/}
            {/*<Route path="archives(/:article)" name="archives" component={Archives}></Route>*/}
            {/*<Route path="settings" name="settings" component={Settings}></Route>*/}
        </Route>
    </Router>,
    app);
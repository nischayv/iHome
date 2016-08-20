import React from "react";
import { Row, Col } from "react-bootstrap";
import $ from "jquery";
import browserHistory from "react-router";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    getCurrentUser() {
        $.ajax({
            url: 'http://localhost:8080/api/isLoggedIn',
            method: 'GET',
            success: function(data) {
                return data.user;
            },
            error: function() {
                browserHistory.push('/login');
            }
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}
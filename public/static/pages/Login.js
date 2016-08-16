import React from "react";
import { Button, Row } from "react-bootstrap";

export default class Login extends React.Component {
    render() {
        return (
            <Row>
                <a className="btn btn-block btn-social btn-lg btn-facebook">
                    <i className="fa fa-facebook"></i>
                    Sign in with Facebook
                </a>
            </Row>
        );
    }
}
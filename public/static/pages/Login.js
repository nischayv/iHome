import React from "react";
import { PageHeader, Row, Col } from "react-bootstrap";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>
                    iHome
                </PageHeader>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <a className="btn btn-block btn-social btn-lg btn-facebook" href="/auth/facebook">
                            <i className="fa fa-facebook"></i>
                            Sign in with Facebook
                        </a>
                        <a className="btn btn-block btn-social btn-lg btn-google">
                            <i className="fa fa-google"></i>
                            Sign in with Google
                        </a>
                        <a className="btn btn-block btn-social btn-lg btn-github">
                            <i className="fa fa-github"></i>
                            Sign in with Github
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}
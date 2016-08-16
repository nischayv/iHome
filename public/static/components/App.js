import React from "react";
import { Row, Col } from "react-bootstrap";

export default class App extends React.Component {
    render() {
        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    <PageHeader>
                        <h1>iHome</h1>
                    </PageHeader>
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}
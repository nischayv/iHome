import React from "react";
import { PageHeader, Row, Col } from "react-bootstrap";

export default class App extends React.Component {
    render() {
        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    <PageHeader>
                        iHome
                    </PageHeader>
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}
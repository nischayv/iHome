import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="page-header">
                        <h1>iHome</h1>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
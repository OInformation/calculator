import React, { Component } from 'react';

class Base extends Component {
    state = {}
    render() {
        return (
            <div className="card" style={{ marginTop: "2rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.children}</h5>
                </div>
            </div>
        );
    }
}

export default Base;
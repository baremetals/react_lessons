import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTron extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div>
                <h1>Hello World</h1>
                <p>
                {this.props.children}
                </p>
                <p><Button variant="primary">Learn more</Button></p>
                <Jumbotron />
            </div>
        );
    }
}

export default JumboTron;
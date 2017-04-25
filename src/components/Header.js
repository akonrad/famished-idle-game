import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Navbar} from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <Navbar inverse fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">FAMISHED</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Text>
                    <Navbar.Link href="https://github.com/ruellia/famished-idle-game">github</Navbar.Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    }
};
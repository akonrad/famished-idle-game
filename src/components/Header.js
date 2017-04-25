import React from 'react';
import {Navbar} from 'react-bootstrap';

export default class Header extends React.Component {
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
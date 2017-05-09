import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Navbar} from 'react-bootstrap';
import encrypter from 'object-encrypter';

const engine = encrypter('test secret', {algorithm: 'aes-256-ctr'});

export default class SaveLoad extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <Navbar fixedBottom fluid>
            <Navbar.Collapse>
                <Navbar.Text>
                    <Navbar.Link onClick={() => prompt("Please copy this to load later on.", engine.encrypt(this.props.reduxState))}>
                        save
                    </Navbar.Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Navbar.Link
                        onClick={() => {
                            const newState = prompt("Please paste in your save data.");
                            this.props.setState(engine.decrypt(newState));
                        }}>
                        load
                    </Navbar.Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    }
};
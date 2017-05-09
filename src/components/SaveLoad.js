import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Navbar} from 'react-bootstrap';

export default class SaveLoad extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        var key = 'real secret keys should be long and random';

// Create an encryptor:
var encryptor = require('simple-encryptor')({key:key,hmac:false});
var encrypted = encryptor.encrypt('testing');
// Should print gibberish:
console.log('encrypted: %s', encrypted);
var decrypted = encryptor.decrypt(encrypted);
// Should print 'testing'
console.log('decrypted: %s', decrypted);
// nested object:
const obj = {
  foo: {
    bar: "x"
  }
};
var objEnc = encryptor.encrypt(obj);
// Should print gibberish:
console.log('obj encrypted: %s', objEnc);
var objDec = encryptor.decrypt(objEnc);
// Should print: {"foo":{"bar":[1,"baz"]}}
console.log('obj decrypted: %j', objDec);

        return <Navbar fixedBottom fluid>
            <Navbar.Collapse>
                <Navbar.Text>
                    <Navbar.Link onClick={() => alert(encryptor.encrypt(this.props.reduxState))}>
                        save
                    </Navbar.Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Navbar.Link
                        onClick={() => console.log('sigh')}>
                        load
                    </Navbar.Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    }
};
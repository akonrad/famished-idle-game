import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <div className="well" style={wellStyles}>
            {this.props.buttons.map((button, i) =>
                <Button key={i} bsSize="large" block bsStyle="primary"
                        onClick={this.mapActionToButton(button.get('name'))}
                        disabled={!button.get('active')}>
                        {button.get('name')}
                </Button>
            )}
        </div>
    }

    mapActionToButton(action) {
        switch (action) {
            case 'body':
                return () => this.props.incrementHunger('body', Math.floor(Math.random() * 5) + 1)
            case 'mind':
                return () => this.props.incrementHunger('mind', Math.floor(Math.random() * 5) + 1)
            case 'soul':
                return () => this.props.incrementHunger('soul', Math.floor(Math.random() * 5) + 1)
            case 'enlightenment':
                return () => this.props.incrementHunger('enlightenment', NaN)
            default:
                return
        }
    }
};
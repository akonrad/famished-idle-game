import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <ButtonToolbar>
            {this.props.buttons.map((button, i) =>
                <Button key={i}
                        onClick={this.mapActionToButton(button.get('name'))}
                        disabled={!button.get('active')}>
                        {button.get('name')}
                </Button>
            )}
        </ButtonToolbar>
    }

    mapActionToButton(action) {
        switch (action) {
            case 'body':
                return () => this.props.incrementHunger('body', 5)
            case 'mind':
                return () => this.props.incrementHunger('mind', 3)
            case 'soul':
                return () => this.props.incrementHunger('soul', 1)
            default:
                return
        }
    }
};
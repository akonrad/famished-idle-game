import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <div>
            <button onClick={() => this.props.incrementHunger('body', 4)}>BODY</button>
            <button onClick={() => this.props.incrementHunger('mind', 2)}>MIND</button>
            <button onClick={() => this.props.incrementHunger('soul', 1)}>SOUL</button>
        </div>
    }
};
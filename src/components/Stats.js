import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <ul>
            <li>body: {this.props.body}</li>
            <li>mind: {this.props.mind}</li>
            <li>soul: {this.props.soul}</li>
        </ul>
    }
};

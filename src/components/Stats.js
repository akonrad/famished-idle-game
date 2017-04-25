import React from 'react';
import {Panel} from 'react-bootstrap';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        return <div>
            <Panel
                header="Stats"
                collapsible={true}
                defaultExpanded={true}
                bsStyle="primary">
                <ul>
                    <li>body: {this.props.body}</li>
                    <li>mind: {this.props.mind}</li>
                    <li>soul: {this.props.soul}</li>
                </ul>
            </Panel>
        </div>
    }
};

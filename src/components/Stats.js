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
                    {this.props.hunger.map((kind, i) =>
                        <li key={i}>{kind.get('kind')}: {kind.get('status')}</li>
                    )}
                </ul>
            </Panel>
        </div>
    }
};

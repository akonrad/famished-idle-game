import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Log extends React.Component {
 constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin
            .shouldComponentUpdate
            .bind(this);
    }

    render() {
        var logs = this.props.log.reverse().slice(0, 40).map(function(log, index){
                        return <li key={index}>{log}</li>;
                      })
        return <ul>{logs}</ul>
    }
};
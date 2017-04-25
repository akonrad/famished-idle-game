import React from 'react';

// log will update based on state? :o
export default class Log extends React.Component {
    render() {
        var logs = this.props.log.reverse().map(function(log){
                        return <li>{log}</li>;
                      })
        return <ul>{logs}</ul>
    }
};
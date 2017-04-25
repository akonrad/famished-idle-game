import React from 'react';

export default class Actions extends React.Component {
    render() {
        return <div>
            <button onClick={() => this.props.incrementBody()}>BODY</button>
            <button onClick={() => this.props.incrementMind()}>MIND</button>
            <button onClick={() => this.props.incrementSoul()}>SOUL</button>
        </div>
    }
};
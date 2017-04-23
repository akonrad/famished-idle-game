import React from 'react';
import {connect} from 'react-redux';
import Stats from './Stats';
import * as actionCreators from '../action_creators';

export class Main extends React.Component {
    render() {
        console.log(this.props.hunger);
        return <div>
            <h1>HI</h1>
            <ul>
                <li>{this.props.hunger.get(0).get('type')}: {this.props.hunger.get(0).get('status')}</li>
                <li>{this.props.hunger.get(1).get('type')}: {this.props.hunger.get(1).get('status')}</li>
                <li>{this.props.hunger.get(2).get('type')}: {this.props.hunger.get(2).get('status')}</li>
            </ul>
            <Stats/>
            <button onClick={() => this.props.incrementBody()}>BODY</button>
            <button onClick={() => this.props.incrementMind()}>MIND</button>
            <button onClick={() => this.props.incrementSoul()}>SOUL</button>
        </div>
    }
};

function mapStateToProps(state) {
    return {
        hunger: state.get('hunger'),
        filter: state.get('filter')
    };
}

export const MainContainer = connect(mapStateToProps, actionCreators)(Main);
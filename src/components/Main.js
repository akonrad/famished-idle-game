import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import Stats from './Stats';
import Log from './Log';
import Actions from './Actions';
import Header from './Header';
import * as actionCreators from '../action_creators';

export class Main extends React.Component {
    render() {
        return <div>
            <Header/>
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <Log log={this.props.log}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Actions incrementHunger={this.props.incrementHunger}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Stats body={this.props.hunger.get(0).get('status')}
                               mind={this.props.hunger.get(1).get('status')}
                               soul={this.props.hunger.get(2).get('status')}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    }
};

function mapStateToProps(state) {
    return {
        hunger: state.get('hunger'),
        log: state.get('log')
    };
}

export const MainContainer = connect(mapStateToProps, actionCreators)(Main);
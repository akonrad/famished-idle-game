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
        console.log(this.props.hunger);
        return <div>
            <Header/>
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <Log />
                    </Col>
                    <Col xs={6} md={4}>
                        <Actions incrementBody={this.props.incrementBody}
                                 incrementMind={this.props.incrementMind}
                                 incrementSoul={this.props.incrementSoul}/>
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
        filter: state.get('filter')
    };
}

export const MainContainer = connect(mapStateToProps, actionCreators)(Main);
import React, {Component} from 'react';
import DefaultScreenLayout from "./_layout/DefualtScreenLayout";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import SpriteFigure from "../components/SpriteFigure";

class BattleScreen extends Component {
    render() {
        const {selected_fighter, opponents} = this.props;

        return (
            <DefaultScreenLayout>

                {/* Battle Canvas */}
                <SpriteFigure sprite={opponents[0]} />

                {/* Action bar */}
                <div className={'p-4 bg-dark fixed-bottom'}>
                    <Row>
                        <Col className={'text-right'}>
                            <button className={'btn btn-info my-2 px-5 py-2'}>Abilities</button>
                        </Col>
                        <Col className={'text-left'}>
                            <button className={'btn btn-info my-2 px-5 py-2'}>Abilities</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'text-right'}>
                            <button className={'btn btn-info my-2 px-5 py-2'}>Abilities</button>
                        </Col>
                        <Col className={'text-left'}>
                            <button className={'btn btn-info my-2 px-5 py-2'}>Abilities</button>
                        </Col>
                    </Row>
                </div>
            </DefaultScreenLayout>
        );
    }
}

const mapStateToProps = ({fighter_selection, battle}) => {
    const {selected_fighter} = fighter_selection;
    const {opponents} = battle;

    return {
        selected_fighter,
        opponents
    }
}

export default connect(
    mapStateToProps,
)(BattleScreen);



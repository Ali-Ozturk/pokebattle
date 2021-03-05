import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {setMove} from "../store/actions";
import {connect} from "react-redux";

class ActionList extends Component {
    state = {
        actions: [
            {
                label: "Abilities",
                action: () => {
                    this.props.setMove("select-fighter-move");
                }
            },
            {
                label: "Potions",
                action: () => {
                    this.props.setMove("select-potions");
                }
            },
        ]
    }

    render() {
        const {actions} = this.state;

        return (
            <Row>
                <Col className={'text-right'}>
                    <button className={'btn btn-info my-2 px-5 py-2'} onClick={actions[0].action}>{actions[0].label}</button>
                </Col>
                <Col className={'text-left'}>
                    <button className={'btn btn-info my-2 px-5 py-2'} onClick={actions[1].action}>{actions[1].label}</button>
                </Col>
            </Row>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMove: move => {
            dispatch(setMove(move));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ActionList);


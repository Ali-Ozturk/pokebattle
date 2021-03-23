import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import ability_data from "../data/abilities";
import {getMoveEffectivenessAndDamage} from "../utils/general";
import {removeOpponentFighter, setMove, setOpponentFighter, setOpponentFighterHealth} from "../store/actions";

class MoveList extends Component {
    state = {
        effectiveness: '',
    }

    handleMoveClicked = move => {
        const {opponent_fighter} = this.props;
        const {damage, effectiveness} = getMoveEffectivenessAndDamage(move, opponent_fighter);
        const updatedHealth = opponent_fighter.current_hp - damage;

        this.props.setOpponentFighterHealth(opponent_fighter, updatedHealth);
        this.setState({effectiveness: effectiveness});

        if (updatedHealth < 1) {
            this.props.removeOpponentFighter(opponent_fighter);
            this.props.backToDefaultMove();
            this.props.setOpponentFighter();
        }
    }

    render() {
        const {selected_fighter} = this.props;

        return (
            <>
                <p className={'text-warning'}>{this.state.effectiveness}</p>
                <Row>
                    {selected_fighter.moves.map(move => {
                        const moveDTO = ability_data.find(e => e.id === move);
                        return (<button className={'btn btn-info my-2 px-5 py-2'}
                                        onClick={() => this.handleMoveClicked(moveDTO)}>
                            {moveDTO.title}
                        </button>)
                    })}
                </Row>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        backToDefaultMove: () => {
            dispatch(setMove("select-move"));
        },
        setOpponentFighter: fighter => {
            dispatch(setOpponentFighter(fighter));
        },
        setOpponentFighterHealth: (fighter, hp) => {
            dispatch(setOpponentFighterHealth(fighter, hp));
        },
        removeOpponentFighter: fighter => {
            dispatch(removeOpponentFighter(fighter));
        }
    }
}
const mapStateToProps = ({fighter_selection, battle}) => {
    const {selected_fighter} = fighter_selection;
    const {opponent_fighter} = battle;

    return {
        selected_fighter,
        opponent_fighter
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoveList);


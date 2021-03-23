import React, {Component} from 'react';
import {Row} from "react-bootstrap";
import {connect} from "react-redux";
import ability_data from "../data/abilities";
import {getMoveEffectivenessAndDamage} from "../utils/general";
import {
    removeMyFighter,
    removeOpponentFighter,
    setMove,
    setMyFighterHealth,
    setOpponentFighter,
    setOpponentFighterHealth,
    setTurn
} from "../store/actions";

class MoveList extends Component {
    state = {
        effectiveness: '',
    }

    handleMoveClicked = move => {
        const {opponent_fighter, selected_fighter} = this.props;
        const {damage, effectiveness} = getMoveEffectivenessAndDamage(move, opponent_fighter);
        const updatedHealth = opponent_fighter.current_hp - damage;

        this.props.setOpponentFighterHealth(opponent_fighter, updatedHealth);
        this.setState({effectiveness: effectiveness});
        this.props.changeTurn("computer");

        if (updatedHealth < 1) {
            this.props.removeOpponentFighter(opponent_fighter);
            this.props.changeTurn("player");
            this.props.setOpponentFighter();
            return 0;
        }

        const timer = setTimeout(() => {
            /* The computers actions happens here */
            const randomMoveID = opponent_fighter.moves[Math.floor(Math.random() * opponent_fighter.moves.length)];
            const fetchMove = ability_data.find(ability => ability.id === randomMoveID);
            const {damage, effectiveness} = getMoveEffectivenessAndDamage(fetchMove, selected_fighter);
            const updatedHealth = selected_fighter.current_hp - damage;

            if (updatedHealth < 1) {
                this.props.removeMyFighter();
            } else {
                this.props.setMyFighterHealth(updatedHealth);
            }

            this.props.changeTurn("player");

        }, 1000);


        return () => clearTimeout(timer);
    }

    render() {
        const {selected_fighter} = this.props;

        return (
            <>
                <p className={'text-warning'}>{this.state.effectiveness}</p>
                <Row className={'d-flex justify-content-center'}>
                    {selected_fighter.moves.map(move => {
                        const moveDTO = ability_data.find(e => e.id === move);
                        return (<button disabled={this.props.turn === "computer"}
                                        className={'btn btn-info my-2 px-5 py-2 mx-2'}
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
        },
        changeTurn: turn => {
            dispatch(setTurn(turn));
        },
        setMyFighterHealth: health => {
            dispatch(setMyFighterHealth(health));
        },
        removeMyFighter: () => {
            dispatch(removeMyFighter());
        }
    }
}
const mapStateToProps = ({fighter_selection, battle}) => {
    const {selected_fighter} = fighter_selection;
    const {opponent_fighter, turn} = battle;

    return {
        selected_fighter,
        opponent_fighter,
        turn
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoveList);


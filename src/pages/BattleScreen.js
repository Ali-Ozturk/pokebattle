import React, {Component} from 'react';
import DefaultScreenLayout from "./_layout/DefualtScreenLayout";
import {connect} from "react-redux";
import SpriteFigure from "../components/SpriteFigure";
import {setMove, setOpponentFighter} from "../store/actions";
import ActionList from "../components/ActionList";
import MoveList from "../components/MoveList";

class BattleScreen extends Component {
    state = {}

    componentDidMount() {
        this.props.setOpponentFighter();
    }

    render() {
        const {opponents, opponent_fighter, selected_fighter, move} = this.props;

        return (
            <DefaultScreenLayout className={'mt-md-5'}>
                {/* Battle Canvas */}
                <div id="battle-arena"
                     className="d-flex align-items-end justify-content-around justify-content-lg-around">

                    {selected_fighter && (
                        <div className={'fighter1 d-inline-block'}><span
                            className={'shadow px-2 bg-white rounded text-dark'}>Health: {selected_fighter.current_hp}</span>
                            {<SpriteFigure sprite={selected_fighter}/>}</div>
                    )}

                    {opponent_fighter && (
                        <div className={'fighter2 d-inline-block'}><span
                            className={'shadow px-2 bg-white rounded text-dark'}>Health: {opponent_fighter.current_hp}</span>
                            {<SpriteFigure sprite={opponent_fighter}/>}</div>
                    )}

                </div>

                {opponents.length > 0 && selected_fighter.current_hp > 1 &&
                <div className={'p-5 bg-dark fixed-bottom'} id='action_bar'>
                    {move !== "select-move" &&
                    <p className={'cursor-pointer text-white m-0'}
                       onClick={() => this.props.backToDefaultMove()}>
                        Go back
                    </p>}

                    {/* Action bar */}
                    {move === "select-move" && <ActionList/>}

                    {/* Move bar */}
                    {move === "select-fighter-move" && <MoveList/>}
                </div>
                }


            </DefaultScreenLayout>
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
        }
    }
}


const mapStateToProps = ({fighter_selection, battle}) => {
    const {selected_fighter} = fighter_selection;
    const {opponents, move, opponent_fighter, turn} = battle;

    return {
        selected_fighter,
        opponents,
        move,
        opponent_fighter,
        turn
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BattleScreen);



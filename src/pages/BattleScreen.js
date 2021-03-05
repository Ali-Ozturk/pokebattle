import React, {Component} from 'react';
import DefaultScreenLayout from "./_layout/DefualtScreenLayout";
import {Col, Row} from "react-bootstrap";
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
            <DefaultScreenLayout>

                {/* Battle Canvas */}
                {opponent_fighter && (
                    <>Health: {opponent_fighter.current_hp}
                        {<SpriteFigure sprite={opponent_fighter}/>}</>
                )}

                {selected_fighter && (
                    <>Health: {selected_fighter.current_hp}
                        {<SpriteFigure sprite={selected_fighter}/>}</>
                )}

                <div className={'p-5 bg-dark fixed-bottom'}>
                    {move !== "select-move" &&
                    <p className={'cursor-pointer text-white m-0'}
                       onClick={() => this.props.backToDefaultMove()}>
                        Go back
                    </p>}

                    {/* Action bar */}
                    {move === "select-move" && <ActionList/>}

                    {/* Move bar */}
                    {move === "select-fighter-move" && <MoveList />}
                </div>

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
    const {opponents, move, opponent_fighter} = battle;

    return {
        selected_fighter,
        opponents,
        move,
        opponent_fighter
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BattleScreen);



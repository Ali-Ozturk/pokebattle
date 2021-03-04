import React, {Component} from 'react';
import {connect} from "react-redux";
import DefaultScreenLayout from "./_layout/DefualtScreenLayout";
import SpriteFigure from "../components/SpriteFigure";
import {getRandomFighters} from "../utils/general";
import {setOpponents} from "../store/actions";
import {Redirect} from "react-router-dom";

class VersusScreen extends Component {
    state = {
        redirect: false,
    }

    componentDidMount() {
        this.props.setOpponents(getRandomFighters(4, this.props.selected_fighter));
    }

    handleFightButtonClick = () => {
        this.setState({
            redirect: true,
        })
    }

    render() {
        const {selected_fighter, opponents} = this.props;

        if (this.state.redirect) {
            return <Redirect to={'/battle'}/>
        }

        return (
            <DefaultScreenLayout>
                <h1>Dine modstandere er ...</h1>

                <div>
                    {opponents.map((fighter, key) => {
                        return <SpriteFigure sprite={fighter} keyid={key} className={'m-4 d-inline-block'}/>
                    })}
                </div>

                <div>
                    <h1 className={'text-danger font-bold font-italic'}>VS.</h1>
                </div>

                <div>
                    <SpriteFigure sprite={selected_fighter} className={'m-4 d-inline-block'}/>
                </div>


                <div>
                    <button type="button" className="btn btn-success font-italic py-3 px-5" onClick={() => this.handleFightButtonClick()}>FIGHT</button>
                </div>
            </DefaultScreenLayout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setOpponents: fighters => {
            dispatch(setOpponents(fighters));
        }
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
    mapDispatchToProps
)(VersusScreen);

import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectFighter} from "../../store/actions";
import SpriteFigure from "../SpriteFigure";
import {Redirect} from "react-router-dom";

class FighterList extends Component {
    state = {
        redirect: false,
    }

    handleFighterSelect = fighter => {
        this.props.selectFighter(fighter);
        this.setState({redirect: true});
    }

// TODO: Create sprites https://levelup.gitconnected.com/three-ways-to-animate-sprite-sheet-image-a5c000f0c579

    render() {
        if (this.state.redirect) {
            return <Redirect push to={'/versus'}/>
        }

        return (
            <div>
                {this.props.fighters.map((item, index) => {
                        return (
                            <SpriteFigure sprite={item} keyId={index}
                                          onClick={() => this.handleFighterSelect(item)} className={'m-4 d-inline-block'}/>
                        )
                    }
                )}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectFighter: fighter => {
            dispatch(selectFighter(fighter));
        }
    }
}

const mapStateToProps = ({fighter_selection}) => {
    const {fighters} = fighter_selection;

    return {
        fighters
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FighterList);

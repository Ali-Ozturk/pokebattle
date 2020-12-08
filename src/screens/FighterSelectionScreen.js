import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setFighter} from "../actions";
import ability_data from "../data/abilities";
import FighterList from "../components/FighterList/FighterList";

class FighterSelectionScreen extends Component {

    render() {
        const { selected_fighter } = this.props;

        return (
            <div>
                <h1>Select your Fighter</h1>

                {!(selected_fighter === null) ? 'you have selected a fighter' : 'you have not selected a fighter!'}

                <FighterList data={this.props.fighters} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFighter: fighter => {
            dispatch(setFighter(fighter));
        }
    }
}

const mapStateToProps = ({fighter_selection}) => {
    const {fighters, selected_fighter} = fighter_selection;

    return {
        fighters,
        selected_fighter
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FighterSelectionScreen);
import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectFighter, setFighter} from "../../actions";

class FighterList extends Component {
    render() {
        const {data} = this.props;

        return (
            <div>
                {data.map((item, index) =>
                    <button key={index} onClick={this.selectFighter}>{item.label}</button>
                )}
            </div>
        );
    }

    selectFighter = () => {
        const { data, toggleFighter, setFighter } = this.props;
        const { id } = data;

        toggleFighter(id, data);

    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleFighter: (id, fighter_data, is_selected) => {
            dispatch(selectFighter(id, fighter_data, is_selected));
        },
        setFighter: fighter => {
            dispatch(setFighter(fighter));
        },
    };
};

export default connect(
    null,
    mapDispatchToProps
)(FighterList);
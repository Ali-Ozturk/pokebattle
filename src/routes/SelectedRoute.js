import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

class SelectedRoute extends Route {
    render() {

        return (
            <>
                {this.props.global.loading ? (
                    <div>Loading ...</div>
                ) : (
                    <Route render={props => {
                        if (!this.props.selected_fighter) {
                            return <Redirect to={'/'}/>
                        }
                        if (this.props.component) {
                            return React.createElement(this.props.component, props);
                        }
                    }}/>
                )}
            </>
        )
    }
}


const mapStateToProps = ({fighter_selection, global}) => {
    const {selected_fighter} = fighter_selection;

    return {
        selected_fighter,
        global,
    }
}

export default connect(
    mapStateToProps
)(SelectedRoute);


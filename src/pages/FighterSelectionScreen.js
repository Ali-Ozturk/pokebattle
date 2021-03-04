import React, {Component} from 'react';
import FighterList from "../components/FighterList/FighterList";
import DefaultScreenLayout from "./_layout/DefualtScreenLayout";

class FighterSelectionScreen extends Component {

    render() {
        return (
            <DefaultScreenLayout>
                <h1>Vælg din <span className={'font-italic text-warning'}>Makker </span></h1>
                <FighterList/>
            </DefaultScreenLayout>
        );
    }
}

export default FighterSelectionScreen;

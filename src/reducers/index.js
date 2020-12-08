import { combineReducers } from "redux";
import FighterReducer from "./FighterReducer";
import BattleReducer from "./BattleReducer";

export default combineReducers({
    fighter_selection: FighterReducer,
    battle: BattleReducer
});
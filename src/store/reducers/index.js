import { combineReducers } from "redux";
import FighterReducer from "./FighterReducer";
import BattleReducer from "./BattleReducer";
import GlobalReducer from "./GlobalReducer";

export default combineReducers({
    fighter_selection: FighterReducer,
    battle: BattleReducer,
    global: GlobalReducer,
});

import { combineReducers } from "redux";
import characters from "./characters";
import locations from "./locations";
import episodes from "./episodes";

const rootReducer = combineReducers({ characters, locations, episodes });

export default rootReducer;

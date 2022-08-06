import { SET_EPISODES } from "../actions/episodeActions";

const initialState = [];
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EPISODES:
      return action.payload;

    default:
      return state;
  }
}

export default rootReducer;

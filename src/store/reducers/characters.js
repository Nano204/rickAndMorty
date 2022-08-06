import { SET_CHARACTERS } from "../actions/characterActions";

const initialState = []

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.payload

    default:
      return state;
  }
};
export default rootReducer;

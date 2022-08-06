import { SET_LOCATIONS } from "../actions/locationActions";

const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};
export default rootReducer;

import { SET_CHARACTERS } from "../actions";

const initialState = {
  characters: [],
  locations: [],
  episodes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        characters: action.payload,
        locations: state.locations,
        episodes: state.episodes,
      };

    default:
      break;
  }
};
export default rootReducer;

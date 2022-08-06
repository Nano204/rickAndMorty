export const SET_LOCATIONS = "locations/set";

export function setLocations(payload) {
  return { type: SET_LOCATIONS, payload };
}

export function getLocations(dispatch) {
  return (dispatch) => {
    return fetch("https://rickandmortyapi.com/api/location")
      .then((r) => r.json())
      .then((response) => {
        if (response) {
          const { results } = response;
          dispatch(setLocations(results));
        }
      });
  };
}

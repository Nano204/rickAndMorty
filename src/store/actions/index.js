export const SET_CHARACTERS = "characters/set";

export function getCharacters() {
  return (dispatch) => {
    return fetch("https://rickandmortyapi.com/api/character")
      .json()
      .then((response) => {
        const {
          data: { results },
        } = response;
        dispatch({ type: SET_CHARACTERS, payload: results });
      });
  };
}

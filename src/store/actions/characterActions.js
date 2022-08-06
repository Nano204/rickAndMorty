export const SET_CHARACTERS = "characters/set";

function setCharacters(payload) {
  return {
    type: SET_CHARACTERS,
    payload,
  };
}

export function getCharacters() {
  return (dispatch) => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((r) => r.json())
      .then((response) => {
        if (response) {
          const { results } = response;
          dispatch(setCharacters(results));
        }
      });
  };
}

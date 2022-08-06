export const SET_EPISODES = "episodes/set";

export function setEpisodes(payload) {
  return { type: SET_EPISODES, payload };
}

export function getEpisodes() {
  return (dispatch) => {
    return fetch("https://rickandmortyapi.com/api/episode")
      .then((r) => r.json())
      .then((response) => {
        if (response) {
          const { results } = response;
          dispatch(setEpisodes(results));
        }
      });
  };
}

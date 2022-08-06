import CharacterCard from "../characterCard/CharacterCard";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../../store/actions/characterActions";
import { getLocations } from "../../store/actions/locationActions";
import { getEpisodes } from "../../store/actions/episodeActions";

function ItemContainer(props) {
  const {
    section,
    history: { push },
  } = props;
  const { characters, locations, episodes } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSection = () => {
      return (
        (section === "characters" && getCharacters()) ||
        (section === "locations" && getLocations()) ||
        (section === "episodes" && getEpisodes())
      );
    };
    dispatch(getSection());
  }, [dispatch, section]);

  function handleShowDetails(id) {
    push(`/home/${section}/${id}`);
  }

  if (section === "characters") {
    return (
      <div>
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
              showDetails={handleShowDetails}
            />
          );
        })}
      </div>
    );
  }
  if (section === "locations") {
    return (
      <div>
        {locations.map((location) => {
          return console.log(location);
        })}
      </div>
    );
  }
  if (section === "episodes") {
    return (
      <div>
        {episodes.map((episode) => {
          return console.log(episode);
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    characters: state.characters,
    locations: state.locations,
    episodes: state.episodes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: () => dispatch(getCharacters()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

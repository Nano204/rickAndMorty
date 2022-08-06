import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        alt="Logo"
        style={{
          textAlign: "center",
          width: "100%",
          background: "#c4d560",
          padding: "5px 25%",
        }}
      />
      <Link to="/home/characters">Characters</Link>
      <Link to="/home/locations">Locations</Link>
      <Link to="/home/episodes">Episodes</Link>
    </div>
  );
}

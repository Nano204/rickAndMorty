import { Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Character from "../components/character/Character";

export default function home() {
  return (
    <div>
      <Route path="/home" component={NavBar} />

    </div>
  );
}

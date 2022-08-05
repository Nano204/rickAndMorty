import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import Character from "./components/character/Character";

export default function App() {
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
      <Redirect exact from="/" to="/home" />
      <Route path="/home" exact component={Home} />
      <Route path="/home/characters" exact component={Character} />
    </div>
  );
}

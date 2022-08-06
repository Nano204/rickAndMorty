import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import ItemContainer from "./components/itemContainer/ItemContainer";

export default function App() {
  return (
    <div>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route
        path="/home/:section"
        render={(props) => (
          <ItemContainer {...props} section={props.match.params.section} />
        )}
      />
    </div>
  );
}

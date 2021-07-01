import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

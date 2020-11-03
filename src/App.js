import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "rsuite/lib/styles/index.less";

import Navigation from "./components/Navigation";
import Decrypt from "./views/Decrypt";
import Encrypt from "./views/Encrypt";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/encrypt">
          <Encrypt />
        </Route>
        <Route path="/">
          <Decrypt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

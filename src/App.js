import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "rsuite/lib/styles/index.less";

import Navigation from "./components/Navigation";

import AesDecrypt from "./views/AesDecrypt";
import AesEncrypt from "./views/AesEncrypt";

import Decrypt from "./views/Decrypt";
import Encrypt from "./views/Encrypt";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/ecdsa-encrypt">
          <Encrypt />
        </Route>
        <Route path="/aes-decrypt">
          <AesDecrypt />
        </Route>
        <Route path="/aes-encrypt">
          <AesEncrypt />
        </Route>
        <Route path="/">
          <Decrypt />
        </Route>
        <Route path="/ecdsa-decrypt">
          <Decrypt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import TelescopicLayoutPage from "./pages/TelescopicLayoutPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={TelescopicLayoutPage} />} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import TelescopicPanelPage from "./pages/TelescopicPanelPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={TelescopicPanelPage} />} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;

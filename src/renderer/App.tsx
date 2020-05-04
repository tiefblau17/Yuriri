import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/homePage';
import SettingIndex from './components/setting/index';
import BounsIndex from './components/bonus/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main_window">
            <HomePage />
          </Route>
          <Route exact path="/bonus">
            <BounsIndex />
          </Route>
          <Route exact path="/setting">
            <SettingIndex />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
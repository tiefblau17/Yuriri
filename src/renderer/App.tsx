import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './components/homePage';
import SettingIndex from './components/setting/settingIndex';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main_window">
            <HomePage />
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
import React from "react";
//import "./style.css";
import "./bStyle.css";
import Hello from "../src/components/Hello/Hello";
import Main from "../src/components/Main/Main";
import What from "../src/components/What/What";
import What_pl from "../src/components/WhatPl/What_pl";
import About from "../src/components/About/About";
import AboutPl from "../src/components/AboutPl/AboutPl";
import Whatr from "../src/components/What_r/What_r";
import Balance from "../src/components/Balance/Balance";
import AskBalance from "../src/components/AskBalance/AskBalance";
import BalanceAbout from "../src/components/BalanceAbout/BalanceAbout";


import HelloPl from "../src/components/HelloPl/HelloPl";

import {
  HashRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Balance} />
          <Route path="/main" component={Main} />
          <Route path="/balanceabout" component={BalanceAbout} />

          <Route path="/balance" component={Balance} />
          <Route path="/askbalance" component={AskBalance} />
          <Route path="/what" component={What} />
          <Route path="/whatpl" component={What_pl} />
          <Route path="/about" component={About} />
          <Route path="/aboutpl" component={AboutPl} />
          <Route path="/hellopl" component={HelloPl} />
          <Route path="/whatr" component={Whatr} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

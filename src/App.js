import React from "react";
import "./style.css";
import Hello from "../src/components/Hello/Hello";
import Main from "../src/components/Main/Main";
import What from "../src/components/What/What";
import What_pl from "../src/components/WhatPl/What_pl"



import {
  HashRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return  (<div>
    <Router>
      <Switch>
        <Route exact path='/' component={Hello} />
        <Route  path='/main' component={Main} />
        <Route  path='/what' component={What} />
        <Route  path='/what_pl' component={What_pl} />

       
  
      </Switch>

    </Router>
    </div>
    )
}

export default App;

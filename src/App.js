import React from "react";
import "./style.css";
import Hello from "../src/components/Hello/Hello";
import Main from "../src/components/Main/Main";
import What from "../src/components/What/What";
import What_pl from "../src/components/WhatPl/What_pl";
import What_r from "../src/components/What_r/What_r";



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
        <Route path='/what_r' component={What_r} />

       
  
      </Switch>

    </Router>
    </div>
    )
}

export default App;

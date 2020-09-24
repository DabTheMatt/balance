import React from "react";
import "./style.css";
import Hello from "../src/components/Hello/Hello";
import Main from "../src/components/Main/Main"

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
       
  
      </Switch>

    </Router>
    </div>
    )
}

export default App;

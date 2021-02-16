import React, { Component } from 'react';
import What from "../What/What"
import {
    HashRouter as Router,
    Link,
    NavLink,
    Route,
    Switch,
  } from "react-router-dom"; 

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="center ">
                <What />
            </div>
        )
    }
}

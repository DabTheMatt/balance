import React, { Component } from 'react';
import vacine from "../../asets/vacine.png";


export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={vacine}/>
            </div>
        )
    }
}

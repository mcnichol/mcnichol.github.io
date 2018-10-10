import React, {Component} from "react";
import Title from "./Title";
import dapper from "../../../res/images/dapper.jpg"

import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Title/>
                <div className="photo-container">
                    <img className="photo" src={dapper}/>
                </div>
            </div>
        )
    }
}

export default Home;
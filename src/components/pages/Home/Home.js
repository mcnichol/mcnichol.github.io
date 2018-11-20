import React, {Component} from "react";
import Title from "./title";
import dapper from "../../../res/images/dapper.jpg"

import "./home.css"

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Title/>
                <div className="photo-container">
                    <img className="photo" src={dapper} alt="dapper-icon"/>
                </div>
            </div>
        )
    }
}

export default Home;

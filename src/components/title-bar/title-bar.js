import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './title-bar.css';


class TitleBar extends Component {
    render() {
        return (
            <div id='title-bar'>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                    <li><NavLink to="/project" activeClassName="active">Projects</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default TitleBar;
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './title-bar.scss';


class TitleBar extends Component {
    render() {
        return (
            <div id='title-bar'>
                <ul>
                    <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                    <li><NavLink to="/blog" activeclassname="active">Blog</NavLink></li>
                    <li><NavLink to="/project" activeclassname="active">Projects</NavLink></li>
                    <li><NavLink to="/about" activeclassname="active">About Me</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default TitleBar;

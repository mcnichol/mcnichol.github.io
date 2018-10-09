import React, {Component} from 'react';
import './TitleBar.css';

class TitleBar extends Component{
    render(){
        return (
            <div id='title-bar'>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>About Me</li>
                </ul>
            </div>
        )
    }
}

export default TitleBar;
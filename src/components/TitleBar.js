import React, {Component} from 'react';

class TitleBar extends Component{
    render(){
        return (
            <div id='titlebar'>
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
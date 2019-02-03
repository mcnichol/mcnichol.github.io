import React, {Component} from 'react';
import TitleBar from "./components/title-bar/title-bar";
import Home from "./components/pages/home/home";
import Blog from "./components/pages/blog/blog";
import About from "./components/pages/about/about";
import Projects from "./components/pages/projects/projects";
import {Route, Switch} from 'react-router-dom'
import './css/App.scss'

class App extends Component {

    render() {
        return (
            <div className="App">
                <TitleBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/project" component={Projects}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import TitleBar from "./components/TitleBar/TitleBar";
import Home from "./components/pages/Home/Home";
import Blog from "./components/pages/Blog/Blog";
import {Route, Switch} from 'react-router-dom'
import './css/App.css'
import Projects from "./components/pages/Projects/Projects";
import About from "./components/pages/About/About";

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

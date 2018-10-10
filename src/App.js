import React, {Component} from 'react';
import TitleBar from "./components/TitleBar/TitleBar";
import MainPage from "./components/MainPage/MainPage";
import Blog from "./components/Blog/Blog";
import {Route, Switch} from 'react-router-dom'
import './css/App.css'
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

class App extends Component {

    render() {
        return (
            <div className="App">
                <TitleBar/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/project" component={Projects}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;

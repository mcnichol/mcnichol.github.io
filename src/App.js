import React, {Component} from 'react';
import TitleBar from "./components/title-bar/title-bar";
import Home from "./components/pages/home/home";
import Blog from "./components/pages/blog/blog";
import About from "./components/pages/about/about";
import Projects from "./components/pages/projects/projects";
import {Route, Routes} from 'react-router-dom'
import './css/App.scss'

class App extends Component {

    render() {
        return (
            <div className="App">
                <TitleBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/project" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;

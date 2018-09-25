import React, {Component} from 'react';
import Header from "./components/header/Header";
import TitleBar from "./components/TitleBar";

class App extends Component {

    render() {
        return (
            <div className="App">
                <TitleBar/>
                <Header/>
            </div>
        );
    }
}

export default App;

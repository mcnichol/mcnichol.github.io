import React, {Component} from 'react';
import TitleBar from "./components/TitleBar/TitleBar";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {

    render() {
        return (
            <div className="App">
                <TitleBar/>
                <MainPage/>
            </div>
        );
    }
}

export default App;

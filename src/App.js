import React, { Component } from 'react';

import * as Code from 'pivotal-ui/css/code';
import './css/prism.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
        </div>
        <div className="terminal">
          <ul className="terminal-dots"><li/><li/><li/></ul>
          <pre>
            <code className="language-java">{`
public class McNichol {
  public static void main(){
    System.out.println("Well that's a good start...");
  }
}
`}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;

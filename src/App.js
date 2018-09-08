import React, { Component } from 'react';

import * as Code from 'pivotal-ui/css/code';
import './css/prism.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="terminal">
          <ul className="terminal-dots"><li className="terminal-dot-close"/><li className="terminal-dot-min"/><li className="terminal-dot-max"/></ul>
          <pre>
            <code className="language-java">
{`
public class McNichol {
  public static void main(String[] args){
    System.out.println("Well that's a good start...");
  }
}
`}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;

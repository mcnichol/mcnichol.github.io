import React, {Component} from 'react';
import Prism from 'prismjs';
import './custom-prism-theme/darcula.css'
import 'prismjs/components/prism-java'
import './code.css'

class Code extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        let code = `@SpringBootApplication
public class McNichol implements CommandLineRunner{
  public static void main(String[] args){
    SpringApplication.run(McNichol.class, args);
  }

  @Override
  public void run (String... args){
    System.out.println("Rock and Roll Baby");
  }
}`;
        return (
            <div>
                <div className="terminal">
                    <ul className="terminal-dots">
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                    <pre>
                        <code className="language-java">{code}</code>
                    </pre>
                </div>
            </div>
        )
    }
}

export default Code;
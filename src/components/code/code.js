import React, {Component} from 'react';
import './code.scss';

class Code extends Component {
    render() {

        return (
            <div className={`${ this.props.styleName }`}>
                <div className="terminal">
                    <ul className="terminal-dots">
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                    <pre>
                        <code className={`language-${this.props.language}`}>{this.props.code}</code>
                    </pre>
                </div>
            </div>
        )
    }
}

export default Code;

import React, {Component} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import './custom-prism-theme/darcula.css';
import Code from "./Code";

class Java extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <Code language='java' styleName={this.props.styleName} code={this.props.code}/>
        )
    }
}

export default Java;
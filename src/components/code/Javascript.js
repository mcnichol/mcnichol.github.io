import React, {Component} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import Code from "./Code";


class Javascript extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <Code language='javascript' styleName={this.props.styleName} code={this.props.code}/>

        )
    }
}

export default Javascript;
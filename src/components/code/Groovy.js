import React, {Component} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-groovy';
import Code from "./Code";


class Groovy extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <Code language='groovy' styleName={this.props.styleName} code={this.props.code}/>

        )
    }
}

export default Groovy;
import React, {Component} from 'react';
import Java from "../../code/Java";
import titleCode from './Title-code'
import './Title.css'

class Title extends Component {
    render() {
        let testCode = titleCode.test;
        let implCode = titleCode.impl;


        return (
            <div className="container">
                <div className='left-pad'/>
                <Java styleName='test' code={testCode}/>
                <Java styleName='impl' code={implCode}/>
                <div className='right-pad'/>
            </div>
        )
    }
}

export default Title;
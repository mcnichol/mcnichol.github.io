import React, {Component} from 'react';
import Java from "../code/Java";
import headerCode from './MainTitle-code'
import './MainTitle.css'

class MainTitle extends Component {
    render() {
        let testCode = headerCode.test;
        let implCode = headerCode.impl;


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

export default MainTitle;
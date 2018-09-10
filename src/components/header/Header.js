import React, {Component} from 'react';
import Java from "../code/Java";
import headerCode from './header-code'
import './Header.css'

class Header extends Component {
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

export default Header;
import React, {Component} from 'react';

class TddGroup extends Component {
    render() {
        return (
            <div className="container">
                <div className='left-pad'/>
                {this.props.test}
                {this.props.impl}
                <div className='right-pad'/>
            </div>
        );
    }
}

export default TddGroup;

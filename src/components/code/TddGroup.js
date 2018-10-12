import React, {Component} from 'react';

class TddGroup extends Component {
    constructor(props) {
        super(props);
    }

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
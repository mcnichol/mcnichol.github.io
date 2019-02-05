import React, {Component} from "react";

import "./post.scss";

class Post extends Component {
    render() {
        return (
            <div className="post">
                <div>
                    <div className="heading-info">
                        <div className="title">{this.props.title}</div>
                        <div className="date">{this.props.date}</div>
                    </div>
                    <div className="summary">{this.props.children}</div>
                </div>
                <div className="image"><img src={this.props.icon} alt="icon"/></div>
            </div>
        );
    }
}

export default Post;

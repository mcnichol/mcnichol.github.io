import React, {Component} from 'react';
import Post from './post';

import springIcon from "./spring-icon.png"

import "./blog.scss"

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="left-pad"/>
                <div className="container">
                    <Post date="20181010" title="Implementing Custom Traces & Spans" icon={springIcon}>Customize  logged traces and spans when using Spring Cloud Sleuth.</Post>
                </div>
                <div className="right-pad"/>
            </div>
        )
    }
}

export default Blog;

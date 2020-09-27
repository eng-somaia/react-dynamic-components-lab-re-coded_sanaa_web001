import React, { Component } from 'react';
// eslint-disable-next-line
import BlogPost from './BlogPost.js'

export default class Comment extends Component {

  render() {
    return (
      <div className="comment">
       {this.props.commentText}
      </div>
    )
  }

}

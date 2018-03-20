import React from "react";
import Comment from "./comment";
import style from "./style";

class CommentList extends React.Component {

  render() {
    console.log(this.props);    
    let commentNodes = this.props.data.map((comment) => {
      return (
        <Comment
          author={ comment.author }
          key={comment["_id"]}
        >
        {
          comment.text
        }
        </Comment>
      )
    });

    return (
      <div
      style={ style.commentList }
      >
      {
        commentNodes
      }
      </div>
    )

  }
}

export default CommentList;

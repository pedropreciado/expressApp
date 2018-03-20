import React from "react";
import CommentList from "./comment_list";
import CommentForm from "./comment_form";
import DATA from "./data";
import style from "./style";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div
        style={ style.commentBox }
      >
        <h2>
          Comments:
        </h2>
        <CommentList
          data={ DATA }
        />
        <CommentForm />
      </div>
    )
  }
}

export default Box;

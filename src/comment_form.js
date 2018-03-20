import React from "react";
import style from "style";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      text: ""
    }
  }

  render() {
    return (
      <form
      style={ style.commentForm }
      onSubmit={ this.handleSubmit }
      >
        <input
        type="text"
        placeholder="Your name..."
        style={ style.commentFormAuthor }
        />
      </form>
    )
  }
}

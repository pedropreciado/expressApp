import React from "react";
import style from "./style";
import marked from "marked";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      auhtor: "",
      text: ""
    };
  }

  updateComment = (event) => {
    event.preventDefault();

    this.setState({
      toBeUpdated: !this.state.toBeUpdated
    });
  }

  handleCommentUpdate = (event) => {
    event.preventDefault();

    let id = this.props.uniqueID;
    let author = (this.state.author) ? this.state.author : null;
    let text = (this.state.text) ? this.state.text : null;
    let comment = {
      author,
      text
    };

    this.props.onCommentUpdate(id, comment);

    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author: "",
      text: ""
    });
  }

  deleteComment = (event) => {
    event.preventDefault();

    let id = this.props.uniqueID;

    this.props.onCommentDelete(id);
    console.log("oops deleted ❌");
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    })
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {

    return (
      <div
      style={ style.comment }
      >
        <h3>
          {
            this.props.author
          }
        </h3>

        <span
        dangerouslySetInnerHTML={ this.rawMarkup() }
        />

        <a
          style={ style.updateLink }
          href="#"
          onClick={ this.updateComment }
          >
          update
        </a>
        <a
          style={ style.deleteLink }
          href="#"
          onClick={ this.deleteComment}
          >
          delete
        </a>
        {
          (this.state.toBeUpdated) ?
          (
            <form
              onSubmit={ this.handleCommentUpdate }
              >
              <input
                type="text"
                placeholder="Update name..."
                style={ style.commentFormAuthor }
                value={ this.state.author }
                onChange={ this.handleAuthorChange }
                />
              <input
                type="text"
                placeholder="Update your comment..."
                style={ style.commentFormText }
                value={ this.state.text }
                onChange={ this.handleTextChange }
                />
              <input
                type="submit"
                style={ style.commentFormPost }
                value="Update"
                />
            </form>
          ) : null
        }
      </div>
    )
  }
}

export default Comment;

import React from "react";
import axios from "axios";
import CommentList from "./comment_list";
import CommentForm from "./comment_form";
import style from "./style";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  loadCommentsFromServer = () => {
    axios.get(this.props.url).then((res) => {
      this.setState({ data: res.data });
    })
  }
  
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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
          data={ this.state.data }
        />
        <CommentForm 
        onCommentSubmit={ this.handleCommentSubmit }
        />
      </div>
    )
  }
}

export default Box;

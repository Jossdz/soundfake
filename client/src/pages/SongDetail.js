import React, { Component } from "react";
import { GET_SONG } from "../services/songs";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  CREATE_COMMENT,
  GET_COMMENT,
  DELETE_COMMENT,
} from "../services/comments";
import CommentCard from "../components/CommentCard";
export default class SongDetail extends Component {
  state = {
    song: {},
    showForm: true,
    comment: "",
  };
  componentDidMount = async () => {
    const {
      data: { song },
    } = await GET_SONG(this.props.match.params.songId);
    const {
      data: { comments },
    } = await GET_COMMENT(song._id);
    console.log(comments);

    song.comments = comments;
    this.setState({ song });
  };
  handleComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = async (e) => {
    e.preventDefault();
    const {
      data: { comment },
    } = await CREATE_COMMENT({
      body: this.state.comment,
      songId: this.state.song._id,
    });
    this.setState({
      song: {
        comments: [comment, ...this.state.song.comments],
      },
      showForm: true,
      comment: "",
    });
  };

  removeComment = async (id) => {
    await DELETE_COMMENT(id);
    this.setState({
      song: {
        comments: this.state.song.comments.filter(
          (comment) => id !== comment._id
        ),
      },
    });
  };
  render() {
    return (
      <MyContext.Consumer>
        {({ loggedUser }) => (
          <>
            <h1>{this.state.song.title}</h1>
            <audio src={this.state.song.songFile} controls></audio>
            <p>
              Created By:
              <b>{this.state.song.author?.email}</b>
              {/* <b>{this.state.song.author && this.state.song.author.email}</b> */}
            </p>
            {this.state.showForm ? (
              loggedUser ? (
                <Button
                  onClick={() =>
                    this.setState({
                      showForm: !this.state.showForm,
                    })
                  }
                >
                  Add comment
                </Button>
              ) : (
                <>
                  <p>You must login to comment</p>
                  <Link to="/login">Login</Link>
                </>
              )
            ) : (
              <form onSubmit={this.addComment}>
                <textarea
                  name="comment"
                  id="comment"
                  cols="90"
                  rows="10"
                  value={this.state.comment}
                  onChange={this.handleComment}
                ></textarea>
                <br />
                <Button type="primary" htmlType="submit">
                  Add comment
                </Button>
                <Button
                  type="ghost"
                  onClick={() =>
                    this.setState({
                      showForm: !this.state.showForm,
                    })
                  }
                >
                  Cancel
                </Button>
              </form>
            )}
            <h3>Comments:</h3>
            {this.state.song.comments?.map((comment) => (
              <CommentCard
                removeComment={this.removeComment}
                {...comment}
                key={comment._id}
              />
            ))}
          </>
        )}
      </MyContext.Consumer>
    );
  }
}

import React, { Component } from "react";
import { MyContext } from "../context";
import { Typography } from "antd";

import CreateSongForm from "../components/CreateSongForm";

import { CREATE_SONG } from "../services/songs";

class CreateSong extends Component {
  state = {
    songURL: "",
  };

  setSongURL = (songURL) => {
    this.setState({
      songURL,
    });
  };
  onFinish = async ({ title }) => {
    const { songURL } = this.state;
    CREATE_SONG({ title, songURL });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <section className="diuritainer">
        <Typography.Title style={{ marginBottom: "50px" }}>
          Create a new song
        </Typography.Title>
        <CreateSongForm
          title="Create Song"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          setSongURL={this.setSongURL}
          song={this.state.songURL}
        />
      </section>
    );
  }
}

CreateSong.contextType = MyContext;

export default CreateSong;

import React, { Component } from "react";
import { GET_SONGS } from "../services/songs";
import SongCard from "../components/SongCard";

export default class Home extends Component {
  state = {
    songs: [],
  };
  componentDidMount = async () => {
    const {
      data: { songs },
    } = await GET_SONGS();
    this.setState({
      songs,
    });
  };
  render() {
    return (
      <>
        <h1>Songs: </h1>
        {this.state.songs.map((song) => (
          <SongCard {...song} key={song._id} />
        ))}
      </>
    );
  }
}

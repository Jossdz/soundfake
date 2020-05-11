import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

function SongCard({ title, author, songFile, _id }) {
  return (
    <Card title={title} extra={<Link to={`/song/${_id}`}>Details</Link>}>
      <audio src={songFile} controls />
      <br />
      <small>By @{author && author.email}</small>
    </Card>
  );
}

export default SongCard;

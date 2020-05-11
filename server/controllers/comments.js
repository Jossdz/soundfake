const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
  const { body, songId } = req.body;
  const owner = req.user;

  const comment = await Comment.create({
    body,
    owner,
    song: songId,
  });

  res.status(201).json({ comment });
};

exports.getCommentsBySong = async (req, res) => {
  const { songId } = req.params;
  const comments = await Comment.find({ song: songId })
    .populate("owner")
    .populate("song");
  res.status(200).json({ comments });
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete(id);

  res.status(200).json({ message: "Comment deleted" });
};

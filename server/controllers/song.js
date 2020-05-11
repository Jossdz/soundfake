const Song = require("../models/Song");

exports.createSong = async (req, res) => {
  const { _id: author } = req.user;
  const { title, songFile } = req.body;
  const song = await Song.create({
    author,
    title,
    songFile,
  });
  res.status(201).json({ song });
};

exports.readSongs = async (req, res) => {
  const songs = await Song.find({}).populate("author");
  res.status(200).json({ songs });
};

exports.readSong = async (req, res) => {
  const song = await Song.findById(req.params.id).populate("author");
  res.status(200).json({ song });
};

exports.editSong = async (req, res) => {
  const { title, songFile } = req.body;
  const song = await Song.findByIdAndUpdate(
    req.params.id,
    { $set: { title, songFile } },
    { new: true }
  );
  res.status(200).json({ song });
};

exports.deleteSong = async (req, res) => {
  const song = await Song.findByIdAndDelete(req.params.id);
  res.status(200).json({ song });
};

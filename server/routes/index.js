const express = require("express");
const router = express.Router();
const uploadConfig = require("../config/cloudinary");
const {
  createSong,
  deleteSong,
  editSong,
  readSong,
  readSongs,
} = require("../controllers/song");
const {
  getCommentsBySong,
  createComment,
  deleteComment,
} = require("../controllers/comments");
/* GET home page */
router.get("/", (req, res, next) => {
  res.send("index");
});

router.post("/upload", uploadConfig.single("song"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded"));
  }
  console.log(req.file);

  res.status(201).json({ secure_url: req.file.secure_url });
});

// CRUD Comments

router.get("/comment/:songId", getCommentsBySong);
router.post("/comment", createComment);
router.delete("/comment/:id", deleteComment);

// CRUD Songs
router.post("/song", createSong);
router.get("/song", readSongs);
router.get("/song/:id", readSong);
router.patch("/song/:id", editSong);
router.delete("/song/:id", deleteSong);

module.exports = router;

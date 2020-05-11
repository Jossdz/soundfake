const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    body: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    song: {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);

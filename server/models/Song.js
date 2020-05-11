const { model, Schema } = require("mongoose");

const songSchema = new Schema(
  {
    title: String,
    songFile: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Song", songSchema);

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, //url
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,

      required: true,
    },
    duration: {
      type: Number, //url se hi milega
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);

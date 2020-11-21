import mongoose from "mongoose";

const postModel = mongoose.Schema({
  user: String,
  imgName: String,
  text: String,
  avatar: String,
  date: String,
});

export default mongoose.model("posts", postModel);

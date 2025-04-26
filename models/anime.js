import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  description: String,
  genre: [String],
  img: String,
});

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;

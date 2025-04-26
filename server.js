import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import Anime from "./models/anime.js";

const app = express();
app.use(express.json());
app.use(cors());

const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(5000, () => {
  connectDb();
  console.log(`server is running at http://localhost:5000`);
});

app.get("/api/anime", async (req, res) => {
  const search = req.query.search || ""; // get ?search= from URL

  const results = await Anime.find({
    title: { $regex: search, $options: "i" }, // case-insensitive search
  });

  res.json(results);
});

app.post("/api/anime", async (req, res) => {
  /*
  const anime = req.body;

  const newAnime = Anime.insertMany(anime);

  await newAnime.save();

  res.send(anime);
  */

  const anime = req.body;

  const insertedAnime = await Anime.insertMany(anime); // No "new" or ".save()"

  res.status(201).json(insertedAnime);
});

app.put("/api/anime/:id", async (req, res) => {
  const animeId = req.params.id;

  const updated = req.body;

  const updatedAnime = await Anime.findByIdAndUpdate(
    animeId,
    updated, // Only update the img field
    { new: true } // Return the updated document
  );

  res.json(updatedAnime);
});

app.delete("/api/anime/:id", async (req, res) => {
  const anime = req.params.id;
  const deleteAnime = req.body;

  const deleteTheSelectedAnime = await Anime.findByIdAndDelete(anime);

  res.json(deleteTheSelectedAnime);
});

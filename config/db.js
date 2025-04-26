import mongoose from "mongoose";

const connectDb = async () => {
  const connect = await mongoose
    .connect(
      "mongodb+srv://jan:pass1234@cluster0.tku1bhi.mongodb.net/anime_db?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("failed to connect " + err);
    });
};

export default connectDb;

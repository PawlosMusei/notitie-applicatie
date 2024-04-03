import express from "express";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from "dotenv";
import cors from 'cors';

//Laad variabelen uit het .env-bestand
dotenv.config();

//Aanmaken express app
const app = express();

app.use(cors())
// Middleware om JSON-verzoeken te parsen
app.use(express.json());

// MongoDB-verbinding
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })

  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/notes", noteRoutes);

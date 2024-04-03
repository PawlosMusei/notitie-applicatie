import express from "express";
import { getAllNotes, createNote } from "../controllers/noteController.js";


const router = express.Router();
// Endpoint om alle taken op te halen
router.get("/", getAllNotes);
// Endpoint om een nieuwe taak toe te voegen
router.post("/", createNote);


export default router;

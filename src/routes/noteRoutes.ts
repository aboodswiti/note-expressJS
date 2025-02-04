import { Router } from "express";
import { getNotes, createNote, getNote } from "../controllers/noteController";

const router = Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNote);
router.post("/notes", createNote);

export default router;

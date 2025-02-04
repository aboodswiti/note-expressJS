import { Request, Response } from "express";
import { getAllNotes, addNote, getNoteById } from "../services/noteService";
import { Note } from "../models/note";

export const getNotes = (req: Request, res: Response): void => {
  res.json(getAllNotes());
};

export const getNote = (req: Request, res: Response): void => {
  const { id } = req.params;
  const note = getNoteById(id);
  if (!note) {
    res.status(404).json({ error: "Note not found" });
    return;
  }
  res.json(note);
};

export const createNote = (req: Request, res: Response): void => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ error: "Title and content are required" });
    return;
  }

  const newNote: Omit<Note, "id" | "createdAt"> = { title, content };
  addNote(newNote);
  res.status(201).json(newNote);
};

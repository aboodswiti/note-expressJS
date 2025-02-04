import { Note } from "../models/note";
import { v4 as uuidv4 } from "uuid";

const notes: Note[] = [
  {
    id: "1",
    title: "First Note",
    content: "This is my first note",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Second Note",
    content: "This is my second note",
    createdAt: new Date(),
  },
];

export const getAllNotes = (): Note[] => notes;

export const getNoteById = (id: string): Note => {
  const note = notes.find((note) => note.id === id);
  if (!note) {
    throw new Error(`Note with id ${id} not found`);
  }
  return note;
};

export const addNote = (note: Omit<Note, "id" | "createdAt">): void => {
  const newNote: Note = {
    id: uuidv4(), // or you can use simpler way like: id: (notes.length + 1).toString()
    createdAt: new Date(),
    ...note,
  };
  notes.push(newNote);
};

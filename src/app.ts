import express from "express";
import noteRoutes from "./routes/noteRoutes";
import cors from "cors";

const app = express();

// Enable CORS for frontend communication
app.use(cors());

app.use(express.json());
app.use("/api", noteRoutes);

export default app;

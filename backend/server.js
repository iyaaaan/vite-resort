// Import Required Modules
import express from "express";
import cors from "cors";
import path from "path";
import { readFile } from "fs/promises";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// use cors
app.use(cors());

// Route to access the "room" data
app.get("/api/data/room", async (req, res) => {
  try {
    const dataBuffer = await readFile(path.join(__dirname, "data/db.json"));
    const data = JSON.parse(dataBuffer);
    const roomData = data.room;
    res.json(roomData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/data/room/:id", async (req, res) => {
  try {
    const dataBuffer = await readFile(path.join(__dirname, "data/db.json"));
    const data = JSON.parse(dataBuffer);

    const id = req.params.id; // Get the value of the 'id' parameter from the URL
    const roomData = data.room.find((item) => item.id == id);

    if (roomData) {
      res.json(roomData); // Send the specific room data as a response
    } else {
      res.status(404).json({ error: "Room not found" }); // Room with the specified ID not found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

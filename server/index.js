const express = require("express");
const notes = require("./data/note");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/note/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.status(200).json({ data: [note] });
  console.log(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

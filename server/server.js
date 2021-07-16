const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(fileUpload());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/upload", require("./routes/upload"));
app.use("/api/gamedata", require("./routes/gameupload"));
app.use("/api/quizdata", require("./routes/quizupload"));
app.use("/api/learningdata", require("./routes/learningupload"));
app.use("/api/studentdata", require("./routes/studentupload"));
app.use("/api/reproductivedata", require("./routes/reproductivedata"));
app.use("/api/hygienedata", require("./routes/hygienerun"));
app.use("/api/hygienedata", require("./routes/hygienerun"));
app.use("/api/stairslidedata", require("./routes/stairslideupload"));
app.use("/api/stars", require("./routes/stars"));

app.get("/data", (req, res) => {
  fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((data) => res.send(data));
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

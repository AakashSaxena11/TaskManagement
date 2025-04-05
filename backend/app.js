const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const cors = require("cors");
const UserAPI = require("./routes/user")
app.use(cors());
app.use(express.json()); // Fix: Parse JSON request bodies
app.use("/api/v1", UserAPI)
//localhost:4000/api/v1/sign-in

app.get("/", (req, res) => {
    res.send("Hello from backend.");
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server has started on http://localhost:${PORT}`);
});

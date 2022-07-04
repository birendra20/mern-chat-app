const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json()); //to accept json data

dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("app is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.Port || 5000;

app.listen(PORT, console.log(`server is running on ${PORT}`));

const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

// const socketServer = require('./socketServer');

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const appointmentRoutes = require('./routes/appointmentRoutes')
// const friendInvitationRoutes = require('./routes/friendInvitationRoutes');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// seed the database
app.use("/api/seed", require("./routes/seedRoutes"));

// category routes
app.use("/api/category", categoryRoutes);
// register routes
app.use("/api/auth", authRoutes);
// appointment routes
app.use('/api/appointment', appointmentRoutes)

console.log("Starting the server...");

const server = http.createServer(app);
// socketServer.registerSocketServer(server);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DB connected`);
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`database connection failed. server not started`);
    console.error(err);
  });

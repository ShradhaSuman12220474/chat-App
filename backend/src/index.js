import express from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import apiRouter from './routers/apiRouter.js';
import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routers/auth.route.js";
import messageRoutes from "./routers/message.route.js";
import { app, server } from "./lib/socket.js";
import { NODE_ENV, PORT } from "./config/serverConfig.js";




const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use('/api',apiRouter);
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});

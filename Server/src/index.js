import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.routes.js";
import connectToDatabase from "./db/connectTodatabase.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:5174"],
      credentials: true,
    })
  );

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


// app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server started on port ${PORT}`);
});

export default app;
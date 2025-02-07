import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import connectToDatabase from "./db/connectTodatabase.js";
import benchmarkRoutes from './routes/benchmark.js';
import energyDataRoutes from './routes/energyData.routes.js';
import smartMeterRoutes from './routes/smartMeter.routes.js';
import costProjectionRoutes from './routes/costProjection.js';
import deviceRoutes from './routes/deviceRoutes.js';
import recommendationRoutes from './routes/recommendation.routes.js';
import goalsRoutes from './routes/goals.routes.js';
import auditRoutes from './routes/audit.routes.js';
dotenv.config();


import { WebSocketServer } from 'ws';
import http from 'http';
const app = express();

const server = http.createServer(app);
const wss = new WebSocketServer({ server });


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
app.use('/api', benchmarkRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/audits', auditRoutes);
// WebSocket logic here...
app.use('/api/energy-data', energyDataRoutes);
app.use('/api/smart-meter', smartMeterRoutes);
app.use('/api/cost-projection', costProjectionRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/goals', goalsRoutes);
// app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server started on port ${PORT}`);
});

export default app;
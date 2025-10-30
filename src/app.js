import dotenv from "dotenv";
import express from "express";
import contactsRouter from "./routes/contacts.route.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { connectDB } from "./db/dbConnection.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use(errorHandler);
export default app;

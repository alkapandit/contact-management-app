import express from "express";
import contactsRouter from "./routes/contacts.route.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use(errorHandler);
export default app;

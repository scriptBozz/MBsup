import Express from "express";
import cors from "cors";
import listingsRouter from "./routes/listings";
import usersRouter from "./routes/users";
// import { connectDB } from "./database/db";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/listings", listingsRouter);
app.use("/users", usersRouter);

export default app;

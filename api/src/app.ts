import Express from "express";
import cors from "cors";
import listingsRouter from "./routes/listings";
import usersRouter from "./routes/users";
import signupRouter from "./routes/users";
// import { connectDB } from "./database/db";
import fileUpload from "express-fileupload";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

app.use("/listings", listingsRouter);
app.use("/users", usersRouter);
// app.use("/signup", signupRouter);
export default app;

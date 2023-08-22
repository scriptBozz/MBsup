import Express from "express";
import cors from "cors";
import listingsRouter from "./routes/listings";
import usersRouter from "./routes/users";
// import { connectDB } from "./database/db";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/listings", listingsRouter);
app.use("/api/users", usersRouter);

// const start = async (): Promise<void> => {
//   const port = 7000 || process.env.PORT;

//   try {
//     await connectDB(process.env.MONGO_URI || "");
//     app.listen(port, () => {
//       console.log("DB CONNECTED");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

export default app;

import Express from "express";
import cors from "cors";
import listingsRouter from "./routes/listings";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use("/listings", listingsRouter);

export default app;

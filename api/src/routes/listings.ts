import Router from "express";
import { createListings } from "../controllers/listings";


const router = Router();

router.post("/", createListings);

export default router;

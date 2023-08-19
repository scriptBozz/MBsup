import { Request, Response } from "express";
import Listings from "../models/Listing";
import { createListingService } from "../services/listings";

export const createListings = async (req: Request, res: Response) => {
  const listingInfo = new Listings({
    title: req.body.title,
    status: req.body.status,
    cost: req.body.cost,
  });
  try {
    const Listings = await createListingService(listingInfo);
    res.status(200).json(Listings);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

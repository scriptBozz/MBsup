import { Request, Response } from "express";
import Listings from "../models/Listing";
import { createListingService } from "../services/listings";

export const createListings = async (req: Request, res: Response) => {
  const listingInfo = new Listings({
    title: req.body.title,
    status: req.body.status,
    cost: req.body.cost,

    number_of_rooms: req.body.number_of_rooms,
    number_of_bedrooms: req.body.number_of_bedrooms,

    type: req.body.type,
    delivery_level: req.body.delivery_level,

    address: req.body.address,
    zipcode: req.body.zipcode,
    street: req.body.street,
    town: req.body.town,
    city: req.body.city,
    district: req.body.district,
    province: req.body.province,

    available_since: req.body.available_since,
    broker_name: req.body.broker_name,
    broker_email: req.body.broker_email,
    broker_phone: req.body.broker_phone,
  });
  try {
    const Listings = await createListingService(listingInfo);
    res.status(200).json(Listings);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

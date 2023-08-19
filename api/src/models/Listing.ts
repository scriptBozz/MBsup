import mongoose, { Document } from "mongoose";

export type ListingDocument = Document & {
  title: string;
  status: string;
  cost: number;
  // interior_space: {
  //   number_of_rooms: number;
  //   number_of_bedrooms: number;
  // };
  // construction: {
  //   type: string;
  //   delivery_level: string;
  // };
  // location: {
  //   address: string;
  //   zipcode: string;
  //   street: string;
  //   town: string;
  //   city: string;
  //   district: string;
  //   province: string;
  // };
  // rental_information: {
  //   available_since: Date;
  //   broker_name: string;
  //   broker_email: string;
  //   broker_phone: string;
  // };
};

const listingsSchema = new mongoose.Schema({
  title: { type: "string" },
  status: { type: "string" },
  cost: { type: "number" },
  // interior_space: {
  //   number_of_rooms: { type: "number" },
  //   number_of_bedrooms: { type: " number" },
  // },

  // construction: {
  //   property_type: { type: "string" },
  //   delivery_level: { type: "string" },
  // },
  // location: {
  //   address: { type: "string" },
  //   zipcode: { type: "string" },
  //   street: { type: "string" },
  //   town: { type: "string" },
  //   city: { type: "string" },
  //   district: { type: "string" },
  //   province: { type: "string" },
  // },
  // rental_information: {
  //   available_since: { type: "date" },
  //   broker_name: { type: "string" },
  //   broker_email: { type: "string" },
  //   broker_phone: { type: "string" },
  // },
});

export default mongoose.model<ListingDocument>("Listings", listingsSchema);

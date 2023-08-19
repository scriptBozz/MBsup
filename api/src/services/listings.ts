
import Listings, { ListingDocument} from "../models/Listing";

export const createListingService = async (
  Listings: ListingDocument 
): Promise<ListingDocument | undefined> => {
  try {
    return Listings.save();
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};


export default  createListingService;
import user, { UserDocument } from "../models/User";

export const createUserService = async (
  user: UserDocument
): Promise<UserDocument | undefined> => {
  try {
    return user.save();
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};

export default createUserService;

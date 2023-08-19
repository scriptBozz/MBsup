import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
    name: string,
    email: string,
    password: string,
    username: string,
    status: boolean,
    apartments: string[],
    subscription_status: boolean,
    personal_information: {
        country: string,
        current_address: string,
        cv: string;
        eductaion: string;
        occupation: string;
        income: string;
        language: string;
        phone: string;
        bank_statement: string;
        extra_doc: string;


    }
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  apartments: [
    {
      type: String,
    },
  ],
  subscription_status: {
    type: Boolean,
    default: false,
  },
  subscriptionId: {
    type: String,
  },
  personal_information: {
    country: {
      type: String,
    },
    current_address: {
      type: String,
    },
    cv: {
      type: Buffer,
      default: "uploadable file",
    },
    education: {
      type: String,
    },
    occupation: {
      type: String,
    },
    income: {
      type: String,
    },
    language: {
      type: String,
    },
    phone: {
      type: String,
    },
    bank_statement: {
      type: Buffer,
      default: "same as cv",
    },
    extra_doc: {
      type: Buffer,
      default: "same as cv",
    },
  },
});

export default mongoose.model<UserDocument>("user", userSchema)
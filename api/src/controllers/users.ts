import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword, comparePassword } from "../bcrypt/bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

import createUserService from "../services/users";
export const userSignup = async (req: Request, res: Response) => {
  const { name, password, email, username } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  const hash = await hashPassword(password);

  const userinfo = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    username: req.body.username,
    status: req.body.status,
    apartments: req.body.apartments,
    subscription_status: req.body.subscription_status,
    subscriptionId: uuidv4(),
    country: req.body.country,
    current_address: req.body.current_address,
    education: req.body.education,
    occupation: req.body.occupation,
    income: req.body.income,
    language: req.body.language,
    phone: req.body.phone,
<<<<<<< HEAD
=======
    cv: req.file,
    bank_statement: req.file,
    extra_doc: req.file,
>>>>>>> 555113aea97653f72854326b120896209f1d6f6e
  });
  //   console.log(files);
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!req.body.email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!req.body.password) {
    return res.status(400).json({ error: "Password is required" });
  }
  if (!req.body.username) {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exist" });
    }

    const user = await createUserService(userinfo);
    return res.status(200).json({ message: "User created", user });
  } catch (error) {
    console.log(error);
  }
};

export const usersSignin = async (req: Request, res: Response) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("No user found");
    // check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Wrong password");
    // create signed token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "10d",
      }
    );
    user.password = undefined || "";
    return res.status(200).json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json("Error. Try again.");
  }
};

// export const usersUpdate = async (req: Request, res: Response) => {
//   const { cv, bank_statement, extra_doc } = req.files as {
//     cv: Express.Multer.File[];
//     bank_statement: Express.Multer.File[];
//     extra_doc: Express.Multer.File[];
//   };

//   const {
//     name,
//     email,
//     password,
//     username,
//     status,
//     apartments,
//     subscription_status,
//     subscriptionId,
//     country,
//     current_address,
//     education,
//     occupation,
//     income,
//     language,
//     phone,
//   } = req.body;

//   const hash = await hashPassword(password);

//   const userUpdate = await User.findByIdAndUpdate(
//     req.params.userId,
//     {
//       name,
//       email,
//       password: hash,
//       username,
//       status,
//       apartments,
//       subscription_status,
//       subscriptionId: uuidv4(),
//       country,
//       current_address,
//       education,
//       occupation,
//       income,
//       language,
//       phone,
//       cv: cv[0].path,
//       bank_statement: bank_statement[0].path,
//       extra_doc: extra_doc[0].path,
//     },
//     { new: true }
//   );

//   if (!userUpdate) {
//     res.status(404).json({ message: "User not found" });
//     return;
//   }

//   return res.status(200).json(userUpdate);
// };

export const allUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}).sort({ createAt: -1 });
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

export const userProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId);
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

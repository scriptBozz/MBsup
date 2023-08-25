import Router from "express";
import {
  userSignup,
  usersSignin,
  usersUpdate,
  allUser,
  userProfile,
} from "../controllers/users";

import multer from "multer";
import path from "path";

// Configure storage for each file type
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Create a single multer instance to handle all files
const upload = multer({ storage: storage });
// multiple upload
const multiple = upload.fields([
  { name: "cv", maxCount: 1 },
  { name: "bank_statement", maxCount: 1 },
  { name: "extra_doc", maxCount: 1 },
]);

const router = Router();

router.post("/", userSignup);
router.post("/signin", usersSignin);
router.patch("/update/:userId", multiple, usersUpdate);
router.get("/", allUser);
router.get("/user-profile/:userId", userProfile);

export default router;

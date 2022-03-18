import express from "express";
import {
  profile,
  logout,
  editProfile,
  deleteProfile,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editProfile);
userRouter.get("/delete", deleteProfile);
userRouter.get(":id", profile);

export default userRouter;

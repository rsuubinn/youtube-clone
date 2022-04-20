import express from "express";
import {
  profile,
  logout,
  editProfile,
  deleteProfile,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editProfile);
userRouter.get("/delete", deleteProfile);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get(":id", profile);

export default userRouter;

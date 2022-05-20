import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const multerUploader = multerS3({
  s3,
  bucket: "rsuubinn-youtube-clone",
});

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user || {};
  next();
};

// 로그인한 유저는 통과
export const protectorMiddleware = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    req.flash("error", "Log in first.");
    return res.redirect("/login");
  }
};

// 로그인 안한 유저는 통과
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/");
  }
};

export const avatarUpload = multer({
  dest: "uploads/avatars",
  storage: multerUploader,
});

export const videoUpload = multer({
  dest: "uploads/videos",
  storage: multerUploader,
});

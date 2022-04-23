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
    return res.redirect("/login");
  }
};

// 로그인 안한 유저는 통과
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return next();
  } else {
    return res.redirect("/");
  }
};

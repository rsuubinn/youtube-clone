import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const pageTitle = "join";
  const { name, username, email, password, password2, location } = req.body;
  if (password !== password2) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This email/username is already taken.",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};

export const login = (req, res) => {
  res.send("Login");
};

export const profile = (req, res) => {
  res.send("See profile");
};
export const logout = (req, res) => {
  res.send("Logout");
};
export const editProfile = (req, res) => {
  res.send("Edit profile");
};
export const deleteProfile = (req, res) => {
  res.send("Delete profile");
};

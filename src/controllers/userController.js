import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
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

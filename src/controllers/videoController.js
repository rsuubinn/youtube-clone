const videos = [
  {
    title: 1,
    rating: 1,
    comments: 1,
    createdAt: 1,
    views: 1,
    id: 1,
  },
  {
    title: 2,
    rating: 2,
    comments: 2,
    createdAt: 2,
    views: 2,
    id: 2,
  },
  {
    title: 3,
    rating: 3,
    comments: 3,
    createdAt: 3,
    views: 3,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: video.title, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

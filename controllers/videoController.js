export const home = (req, res) => res.render("home", { pageTItle : "Home" });
export const search = (req, res) => res.render("search", { pageTItle : "Search" });
export const videos = (req, res) => res.render("videos", { pageTitle : "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle : "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video" });
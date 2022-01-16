export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const upload = (req, res) => res.send("upload video");
export const see = (req, res) => {
    return res.render("watch");};
export const edit = (req, res) => { res.render("edit");}
export const search = (req, res) => res.send("Video search");
export const deletevideo = (req, res) => {
    return res.send("deleteVideo");}
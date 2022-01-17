

export const trending = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating: 5,
            comments:2,
            createdAt: "2 minutes ago",
            views: 59,
            id : 1,
        },
        {
            title: "Second Video",
            rating: 5,
            comments:2,
            createdAt: "2 minutes ago",
            views: 59,
            id : 1,
        },
        {
            title: "Third Video",
            rating: 5,
            comments:2,
            createdAt: "2 minutes ago",
            views: 59,
            id : 1,
        },
    ];
    return res.render("home", {pageTitle: "Home",videos})
    };
export const upload = (req, res) => res.send("upload video");
export const see = (req, res) => {
    return res.render("watch");};
export const edit = (req, res) => { res.render("edit");}
export const search = (req, res) => res.send("Video search");
export const deletevideo = (req, res) => {
    return res.send("deleteVideo");}
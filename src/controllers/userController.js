import User from "../models/User";

export const getJoin = (req, res) => res.render("join", {
    pageTitle: "Join"
});
export const postJoin = async (req, res) => {
    const {name,username,email,password,location} = req.body;
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    res.redirect("/login");
};
export const edit = (req, res) => res.send("user edit");
export const remove = (req, res) => res.send("user remove");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see user");
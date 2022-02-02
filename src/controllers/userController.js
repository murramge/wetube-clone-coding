import User from "../models/User";
import bcrypt from "bcrypt";

export const startGithublogin = (req, res) => {
    const baseUrl = "https://github.com/login/oauth/authorize"
    const config = {
        client_id:"8882a1747708ccd07998",
        allow_signup:false,
        scope:"read:user user:email",
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    return res.redirect(finalUrl)
}

export const getJoin = (req, res) => res.render("join", {
    pageTitle: "Join"
});
export const postJoin = async (req, res) => {
    const {name,username,email,password,password2,location} = req.body;
    const exists = await User.exists({$or: [{username}, {email}] });
    if(password !== password2) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "password confirmation does not match.",
        });
    }
    if(exists) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "This username/email is alread taken",
        });
    }
    try{
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
    }
    catch(error){
        return res.status(400).render("join", {
            pageTitle: "upload Video",
            errorMessage: error._message,
        })
    }
};

export const getLogin = (req, res) => {
    return res.render("login", {pageTitle:"Login"});
}
export const postLogin = async(req, res) => {
    //계정이 존재하는지, 비밀번호가 정확한지 
    const {username,password} = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({username});
    if(!user) {
        return res.status(400).render("login", {pageTitle, errorMessage:"An account with this username/password does not exists"})
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "wrong password",
        });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
}


export const edit = (req, res) => res.send("user edit");
export const remove = (req, res) => res.send("user remove");

export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see user");
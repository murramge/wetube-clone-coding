import User from "../models/User";
import bcrypt from "bcrypt";
import fetch from "node-fetch";
import { application } from "express";

export const startGithublogin = (req, res) => {
    const baseUrl = "https://github.com/login/oauth/authorize"
    const config = {
        client_id:process.env.GH_CLIENT,
        allow_signup:false,
        scope:"read:user user:email",
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    return res.redirect(finalUrl)
}

export const finishGithublogin = async (req, res) => {
    const baseUrl = "https://github.com/login/oauth/access_token"

    const config = {
        client_id:process.env.GH_CLIENT,
        client_secret:process.env.GH_SECRET,
        code: req.query.code
    }
    const params = new URLSearchParams(config).toString();
    const finalUrl= `${baseUrl}?${params}`
    const tokenRequest = await( 
        await fetch(finalUrl, {
        method:"POST",
        headers: {
            Accept: "application/json",
        },
    })
    ).json();
    if("access_token" in tokenRequest){
        const {access_token} = tokenRequest;
        const apiUrl = "https://api.github.com"
        const userData = await ( await fetch(`${apiUrl}/user`, {
            headers: {
                Authorization: `token ${access_token}` //json에는 token이 있어서 access_token을 fetch
            }
        })).json();
        console.log(userData)
        const emailData = await ( await fetch(`${apiUrl}/user/emails`, {
            headers: {
                Authorization: `token ${access_token}` //json에는 token이 있어서 access_token을 fetch
            },
            
        })).json();
        console.log(emailData);
        const emailObj = emailData.find(
            (email) => email.primary === true && email.verified === true);
            if (!emailObj) {
                return res.redirect("/login");
            }
            const existingUser = await User.findOne({email: emailObj.email});
            if(existingUser){
                //현재 존재하는 유저 이메일. 이 유저가 깃헙으로 로그인했든, password로 계정을 생성했든 신경 쓰지 않음
                //핵심은 해당 email을 가진 user가 이미 있는 지 찾아보는 것
                req.session.loggedIn = true;
                req.session.user = existingUser;
                return res.redirect("/");
            }
            else {
                //해당 이메일로 user가 없으니까 계정을 생성해라
                const user = await User.create({
                    name: userData.name ? userData.name:userData.login,
                    username:userData.login,
                    email:emailObj.email,
                    password:"",
                    socialOnly: true,
                    location:userData.location,
                });
                req.session.loggedIn = true;
                req.session.user = user;
                return res.redirect("/");
            }
        }
    else {
        return res.redirect("/login");
    }
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
import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
    return res.render("Join", {pageTitle: "Join"});
}
export const postJoin = async (req, res) => {
    const {name, username, email, password, location} = req.body;
    const usernameExists = await User.exists({username})
    if (usernameExists) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "Username is already taken"
        })
    }

    const emailExists = await User.exists({email})
    if (emailExists) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "Email is already taken"
        })
    }

    try {
        await User.create({
            name,
            username,
            email,
            password,
            location
        });
        return res.redirect("/login");
    } catch (error) {
        return res.status(400).render("join", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        })
    }
}
export const getLogin = (req, res) => {
    return res.render("login", {pageTitle: "Login"});
}
export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const pageTitle = "Login";
    //const exists = await User.exists({username});
    const user = await User.findOne({username});
    if (!user) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "An account with this username does not exists."
        })

    }
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "Wrong password"
        })
    }

    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
}
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
};
export const see = (req, res) => res.send("See");
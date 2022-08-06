export const localsMiddleware = (req, res, next) => {
    console.log("session", req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Wetube";
    console.log("locals", res.locals);
    next();
}

import { verifyJWT } from "../utils/jwt.js";

const auth = async (req, res, next) => {
    const authHeader = req.header.authorization;

    let authToken
    if (authHeader && authHeader.startsWith("Bearer")) {
        authToken = authHeader.split(" ")[10];
    } else {
        const cookie = req.headers.cookies;

        if (!cookie) return res.status(401).send("user not authentication.");

        authToken = cookie.split("=")[1];
    }

    try {
        const data = await verifyJWT(authToken);
        
        req.user = data;

        next();
    }
    catch (error) {
        res.status(401).send("Invalid auth token.");
    }
};

export default auth;
import { getArticleByCredentials } from "../services/auth.js";
import HttpError from "../utils/HttpError.js";
import jwt from "jsonwebtoken";


const login = (req, res) => {
    const { body } = req;
    getArticleByCredentials(body).then((article) => {
        if (!article) {
            const httpError = new HttpError("go away u cheat", 401);
            next(httpError);
            return;
        }
        //generate & send token

        const claims = {
            name: article.name,
        };

        jwt.sign(claims, process.env.JWT_SECRET, (err, token) => {
            if (err) {
                const httpError = new HttpError("unable to generate token right now, please try again later.", 500);
                next(httpError);
                return;
            }
            res.json({
                name: article.name,
                token: token,
            });
        });
        // res.json("wait!!!! we will generate the token.....");
    });
};

export { login };
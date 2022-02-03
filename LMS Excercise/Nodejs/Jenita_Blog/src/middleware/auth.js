import jwt from "jsonwebtoken";
import HttpError from "../utils/HttpError.js";


const authenticate = (req, res, next) => {
  const Authorization = req.header("Authorization");
  // console.log(Authorization);

  const token = Authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, claims) => {
    if (err) {
      const httpError = new HttpError("Your token seems to invalid", 401);
      next(httpError);
      return;
    }

    res.locals.claims = claims;
    next();
  });
};

const authorize = (name) => {
  return (req, res, next) => {
    if (!name.includes(res.locals.claims.name)) {
      const httpError = new HttpError("You don't have sufficient privilege", 403);
      next(httpError);
      return;
    }
    next();
  };
};

export { authenticate, authorize };
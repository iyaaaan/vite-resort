import { validateLogin } from "../models/LoginModel.js";

// validate login
export const checkCredentials = (req, res) => {
  validateLogin(req.body, (err, results) => {
    if (err) {
      res.send(err);
      console.log("Controller NOT OK");
    } else {
      res.json(results);
      console.log("Controller  OK");
    }
  });
};

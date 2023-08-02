import db from "../config/database.js";

// validate log in
export const validateLogin = (data, result) => {
  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [data.username, data.password],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
        console.log("Model NOT OK");
      } else {
        result(null, results[0]);
        console.log("Model OK");
      }
    }
  );
};

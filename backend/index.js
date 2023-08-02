// import express
import express from "express";

// import cors
import cors from "cors";

// import body-parser
import bodyParser from "body-parser";

// import routes
import router from "./route/routes.js";

// user body parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// initialize express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(router);

// PORT
app.listen(5000, () => {
  console.log("Server running successfuly on PORT 5000");
});

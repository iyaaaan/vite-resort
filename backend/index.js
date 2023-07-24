// import express
import express from "express";

// import cors
import cors from "cors";

// import routes
import router from "./route/routes.js";

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

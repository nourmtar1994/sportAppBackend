const express = require("express");
const app = express();
var cors = require("cors");
// const postRoute = require("./src/routes/posts");
//routes import

const testRoute = require("./src/routes/test.routes");
const armyRoutes = require("./src/routes/army.routes");
const corpsRoutes = require("./src/routes/coprs.routes");
const underCorpsRoutes = require("./src/routes/army.routes");
const servicesRoutes = require("./src/routes/service.routes");
const personnelRoute = require("./src/routes/personnel.routes");
const planificationRoute = require("./src/routes/planification.routes");
const sportInfoRoute = require("./src/routes/sportInfo.routes");
//DB CONFIG
require("./config/db");
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

//JSON
app.use(express.json());

//ROUTES
app.use("/army", armyRoutes);
app.use("/corps", corpsRoutes);
app.use("/underCoprs", underCorpsRoutes);
app.use("/services", servicesRoutes);
app.use("/personnel", personnelRoute);
app.use("/test", testRoute);
app.use("/planification", planificationRoute);
app.use("/sportinfo", sportInfoRoute);

//Create server
app.listen(process.env.PORT || 4001, () => {
  console.log("the server can be connect succesfuly on : " + process.env.PORT);
});

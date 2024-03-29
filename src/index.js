// express app
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

// connect to db

db.connect();

app.use(express.static(path.join(__dirname, "public"))); // dan den file public

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views")); // de dan den file view

// routes init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

const express = require("express");
const mongoose = require("mongoose");
// const db = require("./models");


const PORT = process.env.PORT || 3000;

const app = express();

// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: false
});


app.use(require("./Develop/routes/apiRoutes"));
app.use(require("./Develop/routes/htmlRoutes"));


// require("./Develop/routes/apiRoutes")(app);
// require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
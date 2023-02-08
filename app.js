import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import router from "./routes/patient.routes.js";
dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/patient", router);

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("public"));

const port = process.env.PORT || 4111;
app.listen(port, () => {
  console.log(`app reunning and listening at localhost:${port}`);
});

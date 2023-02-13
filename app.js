import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import patientRouter from "./routes/patient.routes.js";
import calendarRouter from "./routes/calendar.routes.js";

dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/patient", patientRouter);
app.use("/calendar", calendarRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("public"));

const port = process.env.PORT || 4111;
app.listen(port, () => {
  console.log(`app reunning and listening at http://localhost:${port}`);
});

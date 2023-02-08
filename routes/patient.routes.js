import express from "express";
import {
  findAll,
  addPatient,
  deleteAll,
  deletePatient,
} from "./../controllers/patient.controller.js";

const router = express.Router();

router.get("/", findAll);

router.post("/add_patient", addPatient);

router.post("/delete_all", deleteAll);

router.post("/delete_patient", deletePatient);

export default router;

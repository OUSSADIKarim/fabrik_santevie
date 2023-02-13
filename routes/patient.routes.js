import express from "express";
import {
  getAllPatients,
  createPatient,
  deleteAllPatients,
  deletePatient,
  getPatient,
  updatePatient,
  getPatientSex,
  getPatientCount,
  getPatientsCountPerAge,
} from "../controllers/patient.controller.js";

const patientRouter = express.Router();

patientRouter.get("/", getAllPatients);

patientRouter.get("/patient-count", getPatientCount);

patientRouter.get("/patient-count-per-age", getPatientsCountPerAge);

patientRouter.get("/:id_p", getPatient);

patientRouter.get("/sex/count", getPatientSex);

patientRouter.post("/edit", updatePatient);

patientRouter.post("/add_patient", createPatient);

patientRouter.post("/delete_all", deleteAllPatients);

patientRouter.post("/delete_patient", deletePatient);

export default patientRouter;

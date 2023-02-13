import express from "express";
import {
  getAllRdv,
  createRDV,
  deleteRDV,
} from "./../controllers/rdv.controller.js";

const calendarRouter = express.Router();

calendarRouter.get("/", getAllRdv);

calendarRouter.post("/create_rdv", createRDV);

calendarRouter.post("/delete_rdv", deleteRDV);

export default calendarRouter;

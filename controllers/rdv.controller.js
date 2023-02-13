import Rdv from "../models/rdv.model.js";
import Patient from "../models/patient_model.js";

export const getAllRdv = async (req, res) => {
  const patients = await Patient.getAllPatients();
  const rdvs = await Rdv.getAllRdv();
  res.render("calendar", { rdvs, patients });
};

export const createRDV = async (req, res) => {
  const id_p = req.body.id_p;
  const date_rdv = req.body.date_rdv;

  await Rdv.createRDV(id_p, date_rdv);
  res.redirect("/calendar");
};

export const deleteRDV = async (req, res) => {
  const id_rdv = req.body.id_rdv;

  await Rdv.deleteRdv(id_rdv);

  res.redirect("/calendar");
};

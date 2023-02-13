import Patient from "../models/patient_model.js";

export const getAllPatients = async (req, res) => {
  const patients = await Patient.getAllPatients();
  res.render("patient", { patients });
};

export const getPatient = async (req, res) => {
  const id_p = req.params.id_p;
  const patient = await Patient.getPatient(id_p);

  res.send(patient);
};

export const getPatientCount = async (req, res) => {
  const patientCount = await Patient.getPatientCount();

  res.send(patientCount);
};

export const getPatientsCountPerAge = async (req, res) => {
  const patientsCountPerAge = await Patient.getPatientsCountPerAge();

  res.send(patientsCountPerAge);
};

export const getPatientSex = async (req, res) => {
  const homme = await Patient.getPatientHomme();
  const femme = await Patient.getPatientFemme();

  res.send([homme, femme]);
};

export const updatePatient = async (req, res) => {
  const id_p = req.body.id_p;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const age = req.body.age;
  const sex = req.body.sex;

  await Patient.updatePatient(nom, prenom, age, sex, id_p);
  res.redirect("/patient");
};

export const createPatient = async (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const age = req.body.age;
  const sex = req.body.sex;

  await Patient.createPatient(nom, prenom, age, sex);

  res.redirect("/patient");
};

export const deleteAllPatients = async (req, res) => {
  await Patient.deleteAllPatients();

  res.redirect("/patient");
};

export const deletePatient = async (req, res) => {
  const id_p = req.body.id_p;

  await Patient.deletePatient(id_p);

  res.redirect("/patient");
};

import Patient from "../models/patient.js";

export const findAll = (req, res) => {
  Patient.findAll((err, patient) => {
    if (err) {
      res.send(err);
    }
    res.render("patient", { patient });
  });
};

export const addPatient = (req, res) => {
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;
  const sex = req.body.sex;
  Patient.addPatient(lastname, firstname, sex);
  res.redirect("/patient");
};

export const deleteAll = (req, res) => {
  Patient.deleteAll();
  res.redirect("/patient");
};

export const deletePatient = (req, res) => {
  const id_p = req.body.id_p;
  Patient.deletePatient(id_p);
  res.redirect("/patient");
};

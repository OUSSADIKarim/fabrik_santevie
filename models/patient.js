import pool from "../utils/database.js";

let Patient = (patient) => {
  (this.patient_id = patient.id_p),
    (this.patient_nom = patient.nom),
    (this.patient_prenom = patient.prenom),
    (this.patient_sex = patient.sex);
};

// find all patients

Patient.findAll = (result) => {
  pool.query(`SELECT * FROM patient`, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// add a patient

Patient.addPatient = (lastname, firstname, sex) => {
  const reslut = pool.query(
    `
    INSERT INTO patient (nom, prenom, sex)
    VALUES(?, ?, ?)
  `,
    [lastname, firstname, sex]
  );

  return reslut;
};

// delete all patients

Patient.deleteAll = () => {
  const result = pool.query(`
  DELETE FROM patient
  `);

  return result;
};

//delete a patient

Patient.deletePatient = (id_p) => {
  const result = pool.query(
    `
    DELETE FROM patient
    where id_p = ?
  `,
    [id_p]
  );

  return result;
};

export default Patient;

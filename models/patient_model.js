import pool from "../utils/database.js";

let Patient = (patient) => {
  (this.patient_id = patient.id_p),
    (this.patient_nom = patient.nom),
    (this.patient_prenom = patient.prenom),
    (this.patient_age = patient.age),
    (this.patient_sex = patient.sex);
};

Patient.getAllPatients = async () => {
  const [rows] = await pool.query(`SELECT * FROM patient`);
  return rows;
};

Patient.getPatientCount = async () => {
  const [rows] = await pool.query(`
    SELECT count(*) AS patientCount from patient
  `);

  return rows;
};

Patient.getPatientsCountPerAge = async () => {
  const [rows] = await pool.query(`
    SELECT age, count(*) as patientsCountPerAge FROM patient
    GROUP BY age
  `);

  return rows;
};

Patient.getPatient = async (id_p) => {
  const [rows] = await pool.query(
    `
  SELECT * FROM patient
  WHERE id_p = ?
  `,
    [id_p]
  );

  return rows;
};

Patient.getPatientHomme = async () => {
  const [rows] = await pool.query(`
    SELECT count(*) AS homme FROM patient
    WHERE sex = 'homme'
  `);

  return rows[0];
};

Patient.getPatientFemme = async () => {
  const [rows] = await pool.query(`
    SELECT count(*) AS femme FROM patient
    WHERE sex = 'femme'
  `);

  return rows[0];
};

Patient.updatePatient = async (nom, prenom, age, sex, id_p) => {
  const [rows] = await pool.query(
    `
  UPDATE patient
  SET nom = ?, prenom = ?, age=?, sex = ?
  WHERE id_p = ? 
`,
    [nom, prenom, age, sex, id_p]
  );

  return rows;
};

Patient.createPatient = async (nom, prenom, age, sex) => {
  const [rows] = await pool.query(
    `
    INSERT INTO patient (nom, prenom, age, sex)
    VALUES (?, ?, ?, ?)
  `,
    [nom, prenom, age, sex]
  );

  return rows;
};

Patient.deleteAllPatients = async () => {
  const [rows] = await pool.query(`
    DELETE FROM patient
  `);
};

Patient.deletePatient = async (id_p) => {
  const [rows] = await pool.query(
    `
    DELETE FROM patient 
    WHERE id_p = ?
  `,
    [id_p]
  );
};
export default Patient;

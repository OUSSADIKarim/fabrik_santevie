import pool from "../utils/database.js";

let Rdv = (rdv) => {
  (this.id_rdv = rdv.id_rdv),
    (this.id_p = rdv.id_p),
    (this.date_rdv = rdv.date_rdv);
};

Rdv.getAllRdv = async () => {
  const [rows] = await pool.query(
    `
    SELECT *, patient.nom FROM rdv
    left join patient
    on rdv.id_p = patient.id_p
    `
  );

  return rows;
};

Rdv.createRDV = async (id_p, date_rdv) => {
  const [rows] = await pool.query(
    `
        INSERT INTO rdv (id_p, date_rdv)
        VALUES (?, ?)
    `,
    [id_p, date_rdv]
  );

  return rows;
};

Rdv.deleteRdv = async (id_rdv) => {
  const [rows] = await pool.query(
    `
    DELETE FROM rdv
    WHERE id_rdv = ?
  `,
    [id_rdv]
  );

  return rows;
};

export default Rdv;

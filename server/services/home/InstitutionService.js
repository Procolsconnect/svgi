const db = require('../../config/db');

// GET ALL ACTIVE INSTITUTIONS
async function getInstitutions() {
  const sql = `SELECT * FROM home_institution WHERE status = 1`;
  const [result] = await db.promise().query(sql);
  return result;
}

// GET BY ID
async function getInstitutionById(id) {
  const sql = `SELECT * FROM home_institution WHERE id = ?`;
  const [result] = await db.promise().query(sql, [id]);
  return result[0];
}

// CREATE INSTITUTION
async function createInstitution(body) {
  const sql = `INSERT INTO home_institution (title, description, image_url, logo_url, link, status) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    body.title,
    body.description,
    body.image_url,
    body.logo_url,
    body.link,
    body.status ?? 1
  ];
  const [result] = await db.promise().query(sql, values);
  return getInstitutionById(result.insertId); // return the inserted row
}

// UPDATE INSTITUTION
async function updateInstitution(id, body) {
  const fields = [];
  const values = [];

  if (body.title !== undefined) {
    fields.push("title = ?");
    values.push(body.title);
  }
  if (body.description !== undefined) {
    fields.push("description = ?");
    values.push(body.description);
  }
  if (body.image_url !== undefined) {
    fields.push("image_url = ?");
    values.push(body.image_url);
  }
  if (body.logo_url !== undefined) {
    fields.push("logo_url = ?");
    values.push(body.logo_url);
  }
  if (body.link !== undefined) {
    fields.push("link = ?");
    values.push(body.link);
  }
  if (body.status !== undefined) {
    fields.push("status = ?");
    values.push(body.status);
  }

  if (fields.length === 0) return null; // nothing to update

  const sql = `UPDATE home_institution SET ${fields.join(", ")} WHERE id = ?`;
  values.push(id);

  const [result] = await db.promise().query(sql, values);
  if (result.affectedRows === 0) return null;

  return getInstitutionById(id);
}

// DELETE INSTITUTION
async function deleteInstitution(id) {
  const sql = `DELETE FROM home_institution WHERE id = ?`;
  const [result] = await db.promise().query(sql, [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getInstitutions,
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitution
};

const db = require("../../config/db");

// Fetch all service offerings
const getServiceOfferings = async () => {
  const [rows] = await db.promise().query(
    "SELECT * FROM service_offerings ORDER BY id ASC"
  );
  return rows;
};

// Create new offering
const createServiceOffering = async (data, file) => {
  const imagePath = file ? `uploads/${file.filename}` : null;
  const { title, description } = data;

  const [result] = await db
    .promise()
    .query(
      "INSERT INTO service_offerings (title, description, image) VALUES (?, ?, ?)",
      [title, description, imagePath]
    );

  return { id: result.insertId, title, description, image: imagePath };
};

// Update offering
const updateServiceOffering = async (id, data, file) => {
  const { title, description } = data;
  const imagePath = file ? `uploads/${file.filename}` : null;

  const fields = [];
  const values = [];

  if (title) {
    fields.push("title = ?");
    values.push(title);
  }
  if (description) {
    fields.push("description = ?");
    values.push(description);
  }
  if (imagePath) {
    fields.push("image = ?");
    values.push(imagePath);
  }

  if (fields.length === 0) return null;

  values.push(id);

  const query = `UPDATE service_offerings SET ${fields.join(", ")} WHERE id = ?`;
  const [result] = await db.promise().query(query, values);

  if (result.affectedRows === 0) return null;

  return { id, title, description, image: imagePath };
};

// Delete offering
const deleteServiceOffering = async (id) => {
  const [result] = await db
    .promise()
    .query("DELETE FROM service_offerings WHERE id = ?", [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getServiceOfferings,
  createServiceOffering,
  updateServiceOffering,
  deleteServiceOffering,
};

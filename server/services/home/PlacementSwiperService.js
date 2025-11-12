const db = require('../../config/db');

async function getPlacementSwiper() {
  const sql = `SELECT * FROM placement_swiper ORDER BY id ASC`;
    const [result] = await db.promise().query(sql);
    return result;
}
async function createPlacementSwiper(file) {
  try {
    const imagePath = file ? `/uploads/${file.filename}` : null;

    const [result] = await db.promise().query(
      "INSERT INTO placement_swiper (image_url) VALUES (?)",
      [imagePath]
    );

    // Return inserted record (optional)
    const [rows] = await db
      .promise()
      .query("SELECT * FROM placement_swiper WHERE id = ?", [result.insertId]);

    return rows[0];
  } catch (error) {
    console.error("Error creating placement swiper:", error);
    throw error;
  }
}

async function deletePlacementSwiper(id) {
  try {
    const [result] = await db
      .promise()
      .query("DELETE FROM placement_swiper WHERE id = ?", [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting placement swiper:", error);
    throw error;
  }
}
 module.exports = { getPlacementSwiper, createPlacementSwiper, deletePlacementSwiper };
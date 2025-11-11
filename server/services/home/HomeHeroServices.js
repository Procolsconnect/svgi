const db = require('../../config/db');
// const logActivity = require('./helpers/logActivity');

async function createHero(body, file, createdBy, ip) {
  let media_url = null;
  let media_type = null;

  if (file) {
    media_url = "/uploads/" + file.filename;

    // detect type
    if (file.mimetype.startsWith("image")) {
      media_type = "image";
    } else if (file.mimetype.startsWith("video")) {
      media_type = "video";
    }
  }

  const data = {
    title: body.title,
    description: body.description,
    media_url,
    media_type,
    button_text: body.button_text,
    status: body.status ?? 1,
  };

  const sql = `
    INSERT INTO home_hero (title, description, media_url, media_type, button_text, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.title,
    data.description,
    data.media_url,
    data.media_type,
    data.button_text,
    data.status,
  ];
  const [result] = await db.promise().query(sql, values);
  return { heroId: result.insertId, ...data };
}
//get hero
async function getHero() {
  const sql = `SELECT * FROM home_hero WHERE status = 1`;
  const [result] = await db.promise().query(sql);
  return result;
}

//put hero
async function updateHero(id, body, file) {
  // 1. Load existing record
  const [rows] = await db.promise().query(
    "SELECT media_url, media_type FROM home_hero WHERE id = ?",
    [id]
  );
  if (rows.length === 0) throw new Error("Hero not found");

  let media_url = rows[0].media_url;
  let media_type = rows[0].media_type;

  // 2. If new file uploaded → override
  if (file) {
    media_url = "/uploads/" + file.filename;

    media_type = file.mimetype.startsWith("image")
      ? "image"
      : "video";
  }

  // 3. Build dynamic update payload
  const sql = `
    UPDATE home_hero
    SET title = ?, description = ?, media_url = ?, media_type = ?, button_text = ?, status = ?, updated_at = NOW()
    WHERE id = ?
  `;

  const values = [
    body.title,
    body.description,
    media_url,
    media_type,
    body.button_text,
    body.status,
    id,
  ];

  const [result] = await db.promise().query(sql, values);
  return result;
}

 async function deleteHero(id) {
  const sql = `DELETE FROM home_hero WHERE id = ?`;
  const [result] = await db.promise().query(sql, [id]);
  return result;
}
  

module.exports = {
   createHero,
   getHero,
   updateHero,
   deleteHero
   };

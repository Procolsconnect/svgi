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
    INSERT INTO home_hero 
    (title, description, media_url, media_type, button_text, status)
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

module.exports = createHero;

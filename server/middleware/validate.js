const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    // Map to only show message text, remove field names
    const messages = error.details.map((d) => d.message.replace(/["]/g, ""));
    return res.status(400).json({
      success: false,
      message: messages.join(", ")
    });
  }
  next();
};
module.exports = { validate };

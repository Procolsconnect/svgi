const auth = (req, res, next) => {
  // Example: Check a token or session
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  // You can decode token and attach user info to req.user
  req.user = { id: 1 }; // Example user
  next();
};

module.exports = { auth };

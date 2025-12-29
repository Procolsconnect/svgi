require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const setRoutes = require('./routes');
const path = require('path');
const connectDB = require("./config/db");


const app = express();

// 1. CORS
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN,
  credentials: true
}));

app.use('/images', (req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

// 2. Parse JSON and form-data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3. Static files
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// 4. Cookies
app.use(cookieParser());

// 5. Session
app.use(session({
  name: 'connect.sid',
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));

// 6. Routes
setRoutes(app);

// 7. Global Error Handler
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// 8. Start server
const port = process.env.PORT || 3000;
if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
  server.timeout = 600000;
}

// Increase timeout for slow uploads (10 minutes)


connectDB();

module.exports = app;

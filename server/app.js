const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// API routes
app.use(router);

// Serve frontend
const clientPath = path.resolve(__dirname, '../client');
app.use(express.static(clientPath));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// ✅ FIXED fallback (works in Express 5)
app.use((req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

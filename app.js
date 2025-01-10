const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// MongoDB Connection


// ---Schemas and Models---

// Team Schema and Model


// Player Schema and Model


// Match Schema and Model


// --- ROUTES ---

app.get("/", (req, res) => {
  res.send("Server is running...")
})

// Team Routes
app.post('/teams', async (req, res) => {
 
});

app.get('/teams/:name', async (req, res) => {
  
});

app.put('/teams/:name', async (req, res) => {
  
});

app.delete('/teams/:name', async (req, res) => {
 
});

// Player Routes
app.post('/players', async (req, res) => {
 
});

app.get('/players/:name', async (req, res) => {
  
});

app.put('/players/:name', async (req, res) => {
  
});

app.delete('/players/:name', async (req, res) => {
  
});

// Match Routes
app.post('/matches', async (req, res) => {
  
 
});

app.get('/matches', async (req, res) => {
  
});

// --- SERVER SETUP ---
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/ `);
});

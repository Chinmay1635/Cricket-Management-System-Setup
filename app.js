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

//Add a new team into db
app.post('/addteam', async (req, res) => {
 
});

//Get existing team from db
app.get('/getteam/:name', async (req, res) => {
  
});


//Update team
app.put('/updateteam/:name', async (req, res) => {
  
});


//Delete team
app.delete('/deleteteam/:name', async (req, res) => {
 
});

// Player Routes

//Add new player
app.post('/addplayer', async (req, res) => {
 
});

//Get a player
app.get('/getplayer/:name', async (req, res) => {
  
});


//Update a player
app.put('/updateplayer/:name', async (req, res) => {
  
});


//Delete a player
app.delete('/deleteplayer/:name', async (req, res) => {
  
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

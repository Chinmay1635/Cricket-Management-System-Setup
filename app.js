const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// MongoDB Connection


 
  // .then(() => console.log('Connected to MongoDB...'))



// ---Schemas and Models---

// Team Schema and Model
try{
 

}catch(err){
  console.log(err.message);
}

// Player Schema and Model
try{
 

}catch(err){
  console.log(err.message);
}

// Match Schema and Model
try{

 
}catch(err){
  console.log(err.message);
}

// --- ROUTES ---

app.get("/", (req, res) => {
  res.send("Server is running...")
})

// Team Routes
//Add new team to the database
app.post('/teams', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

//Get team from the database
app.get('/teams/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

//Update team in the database
app.put('/teams/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

//Delete team from the database
app.delete('/teams/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

// Player Routes
//Add new player to the database
app.post('/players', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

//Get player from the database
app.get('/players/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

//Update player in the database
app.put('/players/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

//Delete player from the database
app.delete('/players/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

// Match Routes
app.post('/matches', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
 
});

app.get('/matches', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

// --- SERVER SETUP ---
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/ `);
});

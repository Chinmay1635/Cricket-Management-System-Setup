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
app.post('/teams', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

app.get('/teams/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

app.put('/teams/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

app.delete('/teams/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

// Player Routes
app.post('/players', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

app.get('/players/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

app.put('/players/:name', async (req, res) => {
  try{
 

  }catch(err){
    console.log(err.message);
  }
});

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

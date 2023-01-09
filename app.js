const express = require('express');
const fs = require("fs");
   
// Read users.json file
fs.readFile("users.json", function(err, data) {
      
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const users = JSON.parse(data);
      
    console.log(users); // Print users 
});

  
// STEP 1: Reading JSON file
const users = require("./users");
// Defining new user
let user = {
    name: "Rohit",
    age: 38,
    language: ["HTML", "C", "JavaScript"]
};
   
// STEP 2: Adding new data to users object
users.push(user);
   
// STEP 3: Writing to a file
fs.writeFile("users.json", JSON.stringify(users), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});


const app = express();
const PORT = 8080;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
const express = require("express");
const app = express();
const db = require("./utils/database")


// Database connection;

db.execute('SELECT * FROM new_registrations')
.then(result=>console.log(result[0][1]))
.catch( err=> console.log("Error fetching data", err))

app.get("/server-status", (req, res)=>{
    res.send("Server is up")
})

app.listen(3000, console.log("Server at 3000"))
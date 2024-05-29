const mysql = require("mysql2")

const pool = mysql.createPool({
    host :'localhost',
    user : 'root',
    database : 'hospitalms',
    password : 'P@k1stan4905'
})

module.exports = pool.promise();
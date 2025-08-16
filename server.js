const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./traffic.db', err => {
    if(err) console.error(err.message);
});

// Create tables
db.run(`CREATE TABLE IF NOT EXISTS fines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vehicle TEXT,
    fine INTEGER,
    offence TEXT
)`);
db.run(`CREATE TABLE IF NOT EXISTS police (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
)`);

// Insert demo police user
db.get(`SELECT * FROM police WHERE username=?`, ['admin'], (err,row)=>{
    if(!row) db.run(`INSERT INTO police (username,password) VALUES (?,?)`, ['admin','1234']);
});

// Routes
app.post('/police/login', (req,res)=>{
    const {username,password} = req.body;
    db.get(`SELECT * FROM police WHERE username=? AND password=?`, [username,password], (err,row)=>{
        if(row) res.json({success:true});
        else res.json({success:false});
    });
});

app.post('/fines', (req,res)=>{
    const {vehicle,fine,offence} = req.body;
    if(!vehicle || !fine || !offence) return res.status(400).json({error:'Fill all fields'});
    db.run(`INSERT INTO fines(vehicle,fine,offence) VALUES(?,?,?)`, [vehicle,fine,offence], function(err){
        if(err) res.status(500).json({error: err.message});
        else res.json({success:true});
    });
});

app.get('/fines/:vehicle', (req,res)=>{
    const vehicle = req.params.vehicle;
    db.all(`SELECT * FROM fines WHERE vehicle=?`, [vehicle.toUpperCase()], (err, rows)=>{
        if(err) res.status(500).json({error: err.message});
        else res.json(rows);
    });
});

app.listen(port, ()=>console.log(`Server running at http://localhost:${port}`));

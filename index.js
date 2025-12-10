const express=require('express');
const app=express();
 const mysql=require('mysql2');
const cors=require('cors');
app.use(cors());
app.use(express.json()); 
  const db=mysql.createConnection(
            {
                host:"localhost",
                user:"root",
                password:"gopi@3399",
                database :"register"
            }
        );
        db.connect((err)=>
        {
            if(err)
            {
                console.log('ther is a problem in database');
            }else
            {
                console.log('databse connnected successfully');
            }
        });
app.post("/root1",(req,res)=>
{
    const {name,monday,tuesday,wednesday,thursday,friday,saturday,sunday} =req.body;
    const sql = `INSERT INTO responses 
        (name, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(sql,[name,monday,tuesday,wednesday,thursday,friday,saturday,sunday],(err,result)=>
        {
            if(err)
            {
                 console.log("Error inserting data:", err);
            return res.status(500).send("Error saving data to database");
            }
            res.send("data saved indatabse successful");
        });
//    console.log(req.body);
//    res.send('data came to srver')
        });
       app.get("/get-responses", (req, res) => {
    const sql = "SELECT * FROM responses";

    db.query(sql, (err, results) => {
        if (err) {
            console.log("Error fetching data:", err);
            return res.status(500).send("Error retrieving data");
        }
        res.json(results);
    });
});

      
        app.listen(3000,()=>
        {
            console.log('app is listening in 3000 server');
        })
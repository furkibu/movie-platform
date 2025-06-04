

const express = require("express");
const app = express();
const setting = require("./setting.js");

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/", (req, res) => {

res.render("index", { user: req.user || null})

})

app.get("/kayit-ol", (req, res) => {

    res.render("kayit-ol", { user: req.user || null})

    })

    app.get("/sayfa", (req, res) => {

        res.render("sayfa", { user: req.user || null})
        
    })

    
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).render('error', { errorCode: 500 });
    });
    
    app.use((req, res, next) => {
      res.status(404).render('error', { errorCode: 404 });
    });
    
    



app.listen(setting.port, ()=> {console.log("Site aktif.")})


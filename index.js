const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 8000;
const cors = require('cors');

// const drawerState = new DrawerState();

app.use(express.json());
app.use(express.text());
app.use(cors())
app.options('*', cors());

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.get("/api/man", (req, res) => {
    res.statusCode = 200;
    res.json(drawerState.man);
});

app.post("/api/man", (req, res) => {
    console.log(req.body);

    const man = req.body;
    console.log(man.name);
    
    res.statusCode = 200;
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    
    drawerState.setMan(req.body)
    res.json(req.body);
})

app.listen(port, (e) => {
    // console.log(drawerState);
    console.log(e ? e : `Listening port: ${port}`);
});
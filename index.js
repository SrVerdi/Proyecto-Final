const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
//IMPORT METHODS OF apoointment and validator.
const {
    saveAppointment,
    getDays,
} = require("../PROYECTO/controller/controller.js");
const {
    validate,
} = require("../PROYECTO/services/validator.js");
//CONECCTION WHIT PORT 8080
app.listen(8080, () => console.log("Servidor encendido!"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "home",
        layoutsDir: `${__dirname}/views`,
    })
);
app.set("view engine", "handlebars");
// INITIAL PETITION OF HOME PAGE
app.get("/", async (req, res) => {
    try {
        res.render("Home");
    } catch (error) {
        res.status(500).send({
            error: `${error}`,
            code: 500
        })
    };
});
//  IF RECIVE THIS REQUEST,CALL THE METHOD "getDays"
app.get("/getDays", async (req, res) => {
    try {
        const days = await getDays();
        res.end(JSON.stringify(days))
    } catch (error) {
        res.status(500).send({
            error: `${error}`,
            code: 500
        })
    };
});
//IF RECIVE THIS REQUEST,CALL THE METHOD "saveAppointment"
app.post("/setAppointment", async (req, res) => {
    let body = "";
    try {
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", async () => {
            const appointment = JSON.parse(body);
            if(validate(appointment)==null){
                const result = await saveAppointment(appointment);
                res.end(JSON.stringify(result));
            } else{
                 console.log("formato no admitido");
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error: `${error}`,
            code: 500
        })
    };
});
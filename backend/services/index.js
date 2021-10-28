const http = require("http");
const url = require("url");
const fs = require("fs");
const {
    saveAppointment,
} = require("../controller/appointmentModel.js");
const {
    getDays,
} = require("../controller/daysModel.js");

http.createServer((req, res) => {
    //IF RECIVE THIS REQUEST,CALL THE METHOD "saveAppointment"
    if (req.url == "/setAppointment" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", async () => {
            const appointment = JSON.parse(body);
            const result = await saveAppointment(appointment);
            res.end(JSON.stringify(result));
        });
    }
    //IF RECIVE THIS REQUEST, READ FILE "index.html"
    if (req.url == "/" && req.method == "GET") {
        fs.readFile("../../frontend/index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }
    //IF RECIVE THIS REQUEST,     //IF RECIVE THIS REQUEST,CALL THE METHOD "getDays"
    if (req.url == "/getDays" && req.method == "GET") {
        (async () => {
            const days = await getDays();
            res.end(JSON.stringify(days))
        })();
    }
})
    .listen(8080)
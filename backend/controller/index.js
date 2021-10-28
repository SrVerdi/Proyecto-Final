const http = require("http");
const url = require("url");
const fs = require("fs");
const {
    saveAppointment,
    getDays,
} = require("../modelo/query.js");

http.createServer((req, res) => {
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
    if (req.url == "/" && req.method == "GET") {
        fs.readFile("../../frontend/index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });

    }
    if (req.url == "/getDays" && req.method == "GET") {
        (async () => {
            const days = await getDays();d
            res.end(JSON.stringify(days))
        })();
    }
})
    .listen(8080)
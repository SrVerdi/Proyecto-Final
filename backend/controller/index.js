const http = require("http");
const url = require("url");
const fs = require("fs");
/*const {
    saveAppointment,
} = require("./query");

*/
http.createServer((req, res) =>{
    /*if(req.url == "/setAppointment" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) =>{
            console.log(chunk.toString());
            body += chunk.toString();
        });
        req.on("end", async () => {
            console.log('body: ' + body);
            const appointment = JSON.parse(body);
            const result = await saveAppointment(appointment);
            console.log('body: ' + body);
            console.log('Insert: ' + JSON.stringify(result));
            res.end(JSON.stringify(result));
        });
    }*/
    if (req.url == "/" && req.method == "GET"){
        console.log("Fuera del if");
        fs.readFile("../../frontend/login.html", (err, data) => {
            res.setHeader("Content-Type","text/html");
            console.log("Dentro del if");
            res.end(data);
            console.log("Sigue dentro");
        });
        
    }
})
.listen(8080)
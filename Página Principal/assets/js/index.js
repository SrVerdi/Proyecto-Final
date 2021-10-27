const http = require('http');
const url = require('url');
const fs = require('fs');
const {
    saveAppointment,
} = require("../bbdd/query.js");

http.createServer((req, res) =>{
/*var sendButton = document.getElementById("sendButton");

sendButton.addEventListener('click', function(){
    let name = document.getElementById("name").value;
    let direction = document.getElementById("direction").value;
    let phone = document.getElementById("phone").value;
    let mail = document.getElementById("mail").value;
    let serviceSelect = document.getElementById("serviceSelect").value;
    let daySelect = document.getElementById("daySelect").value;

    let appoiment = [name ,direction, phone,mail,serviceSelect,daySelect];
    console.log(appoiment);
    saveAppointment(apoiment);

});
*/
if(req.url == "/setAppointment" && req.method == "POST"){
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
        //console.log('Insert: ' + JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
}
if(req.url =="/" && req.method =="GET"){
    fs.readFile("../../index.html" , (err,data)=>{
        res.setHeader("Content-Type","text/html");
        res.end(data);
    });
}
}).listen(3000)
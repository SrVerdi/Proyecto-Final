const http = require("http");
const url = require("url");
const fs = require("fs");

const password = "123";
const user ="user";

http.createServer((req, res) =>{
    /*let button = document.getElementById('loginBtn');*/
    if (req.url == "/" && req.method == "GET"){
        console.log("Fuera del if");
        fs.readFile("../../frontend/login.html", (err, data) => {
            res.setHeader("Content-Type","text/html");
            console.log("Dentro del if");
            res.end(data);
            console.log("Sigue dentro");
        });
    }
    /*button.addEventListener("click", function(){
    let user2 = document.getElementById('userImput').value;
    let pass = document.getElementById('passImput').value;
        if(user2===user && pass===password){
            fs.readFile("../../frontend/admin.html", (err, data) => {
                res.setHeader("Content-Type","text/html");
                console.log("Dentro del if");
                res.end(data);
                console.log("Sigue dentro");
            });
        }
    })
    */

    
})
.listen(8080)
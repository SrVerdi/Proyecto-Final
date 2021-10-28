const http = require('http')
const url = require('url')
const fs = require('fs')
const{
    getAppointments,
} = require ("../modelo/bbddAdmin.js")

http.createServer((req,res)=>{
    //Proceso para traer los candidatos (mirar en archivo consulta.js metodo getCandidato)
    if(req.url=="/getAppointments"  && req.method=="GET"){
        ( async()=> {
            const appointment = await getAppointments();
            res.end(JSON.stringify(appointment));
        }
        )();
    }  
    if (req.url == "/" && req.method == "GET") {
        fs.readFile("../../frontend/admin.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }
})

.listen(8080)



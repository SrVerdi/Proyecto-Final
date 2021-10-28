const http = require('http')
const url = require('url')
const fs = require('fs')
const days = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
const{
    getAppointment,
    deletAppointment,
    editAppointment,
    saveAppointment,
} = require ("../bbdd/bbdd.js")

http.createServer((req,res)=>{
    //Proceso para traer los candidatos (mirar en archivo consulta.js metodo getCandidato)
    if(req.url=="/admin"  && req.method=="GET"){
        ( async()=> {
            const appointment = await getAppointment();
            console.log('Candidatos : '+ JSON.stringify(appointment));
            res.end(JSON.stringify(candidatos));
        }
        )();
    }  
})

.listen(3000,()=> {
    console.log('Servidor http://localhost:3000')
}
)



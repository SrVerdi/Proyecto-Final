const {Pool} = require('pg');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'cerrajeria',
    password:'mysecretpassword',
    port:5432,
});

async function saveAppointment(appointment){
    const values = Object.values(appointment);
    const consulta ={
        text: 'INSERT INTO appointment(name,adress,phone,email,service,days) VALUES ($1,$2,$3,$4,$5,$6);',
        values,
    };
    try{
        const result = await pool.query(consulta);
        return result;
    }catch(e){
        return (e);
    }
}

async function getAppointment(){
    try{
        const result = await pool.query( 'SELECT * FROM appointment;');        
        return result.rows;
    }catch(e){
        return (e);
    }
}

async function deletAppointment(id){
    try{
        const result = await pool.query( `DELETE FROM appointment WHERE id = ${id};`);
        return result.rows;
    }catch(e){
        console.log(e);
        return (e);
    }
}

async function editAppointment(candidato){
    const values = Object.values(candidato);
    const consulta ={
        text: 'UPDATE candidatos SET  name = $1, adress = $2, phone = $3, email = $4, service = $5, days = $6 WHERE id = $3 RETURNING *;',
        values,
    };
    try{
        const result = await pool.query(consulta);
        return result.rows;
    }catch(e){
        return (e);
    }
}

module.exports = {
    getAppointment,
    deletAppointment,
    editAppointment,
    saveAppointment,
};


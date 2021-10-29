const{
    connectionInit,
} = require("../repository/conenection.js");
const pool = connectionInit();

async function saveAppointment(appointment){
    const values = Object.values(appointment);
    const consulta = {
        text:
        `INSERT INTO appointment(name, adress, phone, email, service, day, dateNow) VALUES($1, $2, $3, $4, $5, $6, NOW());`,
        values,
    };
    try{
        const result = await pool.query(consulta);
        return result;
    }catch (error){
        return error;
    }
}

async function getAppointments(){
    try{
        const result = await pool.query( 'SELECT name, adress, phone , email, service, day FROM appointment;');        
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

async function editAppointment(appointment , id){
    const values = Object.values(appointment);
    const consulta ={
        text: `UPDATE appointmnet SET name = $1, adress = $2, phone = $3, email = $4, service = $5, days = $6 WHERE id = ${id};`,
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
    getAppointments,
    deletAppointment,
    editAppointment,
    saveAppointment
};


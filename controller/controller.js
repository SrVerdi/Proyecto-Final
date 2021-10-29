const{
    connectionInit,
} = require("../repository/connection.js");
const pool = connectionInit();
//INSERT INTO TABLE "appointment" INFORMATION RECIVED
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
//GET DAYD OF TABLE "days" WHERE HIS STATE IS TRUE
async function getDays(){
    try{
        const result = await pool.query(`SELECT day FROM days WHERE state = true;`);
        return result.rows;
    }catch(error){
        return error;
    }
}
module.exports = {
    saveAppointment,
    getDays,
};


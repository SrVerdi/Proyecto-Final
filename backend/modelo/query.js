const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'mysecretpassword',
    database: 'cerrajeria',
    port: 5432,
})
async function getDays(){
    try{
        const result = await pool.query(`SELECT day FROM days WHERE state = true;`);
        return result.rows;
    }catch(e){
        return e;
    }
}
async function saveAppointment(appointment){
    const values = Object.values(appointment);
    const consulta = {
        text:
        `INSERT INTO appointment(names, adress, phone, email, service, day, dateNow) VALUES($1, $2, $3, $4, $5, $6, NOW());`,
        values,
    };
    try{
        const result = await pool.query(consulta);
        return result;
    }catch (e){
        return e;
    }
}
module.exports = {
    getDays,
    saveAppointment,
};
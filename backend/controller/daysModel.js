const{
    connectionInit,
} = require("../repository/connection.js");
const pool = connectionInit();

async function getDays(){
    try{
        const result = await pool.query(`SELECT day FROM days WHERE state = true;`);
        return result.rows;
    }catch(error){
        return error;
    }
}
async function editDay(state, id){
    const values = Object.values(appointment);
    const consulta ={
        text: `UPDATE days SET day = ${state} WHERE id = ${id};`,
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
    editDay,
    getDays,
};
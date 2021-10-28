const { Pool } = require('pg');

function connectionInit(){
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'mysecretpassword',
    database: 'locksmith',
    port: 5432,
})
return pool;
}
module.exports={
    connectionInit
};

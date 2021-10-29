
const Joi = require('joi');
//validate name, adress, phone and email of appoinment.
function validate({name , adress, phone, email}){
    const schema = Joi.object({
        name: Joi.string().pattern(new RegExp('^([a-zA-ZñÑ_]+([a-zA-ZñÑ_]+)*){3,30}$')),
        adress: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        phone: Joi.string().pattern(new RegExp('^[0-9]{9,13}$')),
        email: Joi.string().email(),
    })
    let val = schema.validate({name : name , adress: adress , phone: phone , email:email });
    return val.error;
}
module.exports = {
    validate,
};
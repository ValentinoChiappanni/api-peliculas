const joi = require("joi")

const peliculasSchemas = joi.object().keys(
    {
        nombre: joi.string().required().min(3).max(255).messages({
            "any.required": "El campo nombre es requerido.",
            "string.min": "El nombre debe contener al menos 3 caracteres.",
            "string.max": "El nombre debe contener como maximo 255 caracteres."
        }), 
        añoEstreno: joi.number().required().max(new Date().getFullYear()).messages({
            "any.required": "El campo añoEstreno es requerido.",
            "number.max": "El año de estreno no debe ser superior al año actual",
        }),
        plataforma: joi.string().required().min(3).max(25).messages({
            "any.required": "El campo plataforma es requerido.",
            "string.min": "El plataforma debe contener al menos 3 caracteres.",
            "string.max": "El plataforma debe contener como maximo 25 caracteres."
        }),
        estaDisponible: joi.boolean().required()
    }
) 

module.exports = peliculasSchemas
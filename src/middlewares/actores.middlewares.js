const {Actores} = require('../models')

const validateActores = async (req,res,next) =>{
    const {id} = req.params
    const actor = await Actores.findByPk(id)
    if (!actor)
        return res.status(404).json({mensaje: `El id ${id} no existe`})     
    next()
}

module.exports = { validateActores}
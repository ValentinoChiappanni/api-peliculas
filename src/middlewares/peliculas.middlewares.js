const {Peliculas} = require('../models')

const validatePelicula = async (req,res,next) =>{
    const {id} = req.params
    const pelicula = await Peliculas.findByPk(id)
    if (!pelicula)
        return res.status(404).json({mensaje: `El id ${id} no existe`})     
    next()
}

module.exports = { validatePelicula}
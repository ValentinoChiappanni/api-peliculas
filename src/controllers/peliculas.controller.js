const { where } = require('sequelize')
const {Peliculas} = require('../models')
const controller = {}

const getAllPeliculas = async (req,res) => {
    const peliculas = await Peliculas.findAll({order: [['añoEstreno','ASC']]})
    res.status(200).json(peliculas)
}
controller.getAllPeliculas = getAllPeliculas

const getPeliculaById = async (req,res) => {
    const {id} = req.params
    const pelicula = await Peliculas.findByPk(id)
    res.status(200).json(pelicula)
}
controller.getPeliculaById = getPeliculaById


const deletePeliculaById = async (req,res) => {
    const {id} = req.params
    const pelicula = await Peliculas.destroy({where:{id}})
    res.status(200).json({mensaje: `La pelicula con ID ${id} fue eliminada`})
}
controller.deletePeliculaById = deletePeliculaById


const postPelicula = async (req,res) => {
    const { nombre, añoEstreno, plataforma, estaDisponible } = req.body
    const body = req.body
    console.log(body)
    console.log('Este es el año',añoEstreno)
    const pelicula = await Peliculas.create({   
        nombre,   
        añoEstreno, 
        plataforma, 
        estaDisponible
    })
    res.status(201).json(pelicula);
}
controller.postPelicula = postPelicula


const updatePeliculaById= async (req,res) => {
    const { nombre, añoEstreno, plataforma, estaDisponible } = req.body
    const {id} = req.params
    const pelicula = await Peliculas.findByPk(id)
    await pelicula.update({
        nombre, añoEstreno, plataforma, estaDisponible 
    })
    res.status(200).json(pelicula)
}
controller.updatePeliculaById = updatePeliculaById

module.exports= controller
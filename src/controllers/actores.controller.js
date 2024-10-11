const {Actores} = require('../models')
const controller = {}

const getAllActores = async (req,res) => {
    const actores = await Actores.findAll()
    res.status(200).json(actores)
}
controller.getAllActores = getAllActores

const getActorById = async (req,res) => {
    const {id} = req.params
    const actor = await Actores.findByPk(id)
    res.status(200).json(actor)
}
controller.getActorById = getActorById


const deleteActorById = async (req,res) => {
    const {id} = req.params
    const actor = await Actores.destroy({where:{id}})
    res.status(200).json({mensaje: `El actor con ID ${id} fue eliminado`})
}
controller.deleteActorById = deleteActorById


const postActor = async (req,res) => {
    const { nombre, apellido, edad } = req.body
    const actor = await Actores.create({   
        nombre,   
        apellido, 
        edad, 
    })
    res.status(201).json(actor);
}
controller.postActor = postActor


const updateActorById= async (req,res) => {
    const {  nombre, apellido, edad } = req.body
    const {id} = req.params
    const actor = await Actores.findByPk(id)
    await actor.update({
        nombre, apellido, edad 
    })
    res.status(200).json(actor)
}
controller.updateActorById = updateActorById

module.exports= controller
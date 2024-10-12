const {Router} = require("express")
const route = Router()
const controllers = require('../controllers/actores.controller')
const {validateActores} = require('../middlewares/actores.middlewares')
// const schemasValidator = require('../middlewares/scemasValidate.middlewares')
// const peliculasSchemas = require('../schemas/peliculas.schemas')

route.get("/actores",controllers.getAllActores )
route.get("/actoresYPeliculas",controllers.getAllActoresYPeliculas )
route.get("/actores/:id",validateActores, controllers.getActorById )
route.delete("/actores/:id",validateActores, controllers.deleteActorById )
route.post("/actores",controllers.postActor )
route.put("/actores/:id",validateActores, controllers.updateActorById )

module.exports = route
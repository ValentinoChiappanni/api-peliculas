const {Router} = require("express")
const route = Router()
const controllers = require('../controllers/peliculas.controller')
const {validatePelicula} = require('../middlewares/peliculas.middlewares')
const schemasValidator = require('../middlewares/scemasValidate.middlewares')
const peliculasSchemas = require('../schemas/peliculas.schemas')

route.get("/peliculas",controllers.getAllPeliculas )
route.get("/peliculas/:id",validatePelicula, controllers.getPeliculaById )
route.delete("/peliculas/:id",validatePelicula, controllers.deletePeliculaById )
route.post("/peliculas",schemasValidator(peliculasSchemas),controllers.postPelicula )
route.put("/peliculas/:id",schemasValidator(peliculasSchemas), validatePelicula, controllers.updatePeliculaById )

module.exports = route
import express from 'express'

import { peliculasController } from '../../controllers/peliculas/peliculas.controller'

export class peliculasApi {

    async obtenerNombrePelicula( req:express.Request, res:express.Response) {
         const controlador = await new peliculasController().obtenerNombrePelicula(req.body.nombre)
         return res.status(200).send(controlador)
}

    async otenerSinopsisPelicula( req:express.Request, res:express.Response) {
         const controlador = await new peliculasController().obtenerSinopsisPelicula(req.body.nombre)
         return res.status(200).send(controlador)
}

    async otenerPrecioPelicula ( req:express.Request, res:express.Response )  {
        const controlador = await new peliculasController().obtenerPrecioPelicula(req.body.nombre)
        return res.status(200).send(controlador)
}

    async obtenercalificacionedad ( req:express.Request, res:express.Response) {
        const controlador = await new peliculasController().obtenerCalificacionEdad(req.body.nombre)
        return res.status(200).send(controlador)
    }
}